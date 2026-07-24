import { Injectable, Logger, NotFoundException, BadRequestException, Inject, Optional } from '@nestjs/common';
import { WorkflowInstanceRepository } from './repositories/workflow-instance.repository.js';
import { IApprovalRecord, IVote } from './interfaces/approval.interface.js';
import { IApproverConfig } from './interfaces/workflow-step.interface.js';
import { APPROVAL_STATUS, APPROVAL_STRATEGY, StepStatus } from './constants/workflow.constants.js';
import { EventBusService } from '@sbb/event-bus';
import { ApprovalRequestedEvent, ApprovalGrantedEvent, ApprovalRejectedEvent } from './events/workflow.events.js';

@Injectable()
export class ApprovalService {
  private readonly logger = new Logger(ApprovalService.name);

  constructor(
    private readonly instanceRepo: WorkflowInstanceRepository,
    @Optional() @Inject(EventBusService) private readonly eventBus?: EventBusService
  ) {}

  /**
   * Creates a new approval request for a workflow step.
   */
  async createApprovalRequest(
    instanceId: string,
    stepId: string,
    approverConfig: IApproverConfig,
    tenantId?: string | null,
    organizationId?: string | null,
    stepExecutionId?: string
  ): Promise<IApprovalRecord> {
    const expiresAt = approverConfig.timeoutMs
      ? new Date(Date.now() + approverConfig.timeoutMs)
      : undefined;

    const approval = await this.instanceRepo.createApproval({
      instanceId,
      stepId,
      stepExecutionId,
      tenantId,
      organizationId,
      approverType: approverConfig.approverType,
      requiredApprovers: approverConfig.requiredApprovers || [],
      approvalStrategy: approverConfig.approvalStrategy || APPROVAL_STRATEGY.SINGLE,
      expiresAt,
    });

    if (this.eventBus) {
      await this.eventBus.publish(
        new ApprovalRequestedEvent({
          tenantId,
          organizationId,
          payload: {
            instanceId,
            stepId,
            approvalId: approval.id,
            requiredApprovers: approval.requiredApprovers,
            approvalStrategy: approval.approvalStrategy,
          },
        })
      );
    }

    await this.instanceRepo.addExecutionLog({
      instanceId,
      stepId,
      event: 'ApprovalRequested',
      message: `Approval requested for step ${stepId}. Required approvers: ${approval.requiredApprovers.join(', ')}`,
      details: { approvalId: approval.id, strategy: approval.approvalStrategy },
    });

    return approval;
  }

  /**
   * Casts a vote on an active approval request.
   */
  async castVote(
    instanceId: string,
    stepId: string,
    approverId: string,
    decision: 'APPROVED' | 'REJECTED',
    comment?: string,
    tenantId?: string | null
  ): Promise<{ approval: IApprovalRecord; statusChanged: boolean; finalStatus: string }> {
    const approval = await this.instanceRepo.findApproval(instanceId, stepId);

    if (!approval) {
      throw new NotFoundException(`Approval record for instance ${instanceId} and step ${stepId} not found`);
    }

    if (approval.status !== APPROVAL_STATUS.PENDING) {
      throw new BadRequestException(`Approval record ${approval.id} is already in ${approval.status} status`);
    }

    if (tenantId && approval.tenantId && approval.tenantId !== tenantId) {
      throw new BadRequestException(`Tenant mismatch for approval ${approval.id}`);
    }

    // Check if approver is authorized
    const isAuthorized =
      approval.requiredApprovers.length === 0 ||
      approval.requiredApprovers.includes(approverId) ||
      approval.requiredApprovers.includes('*');

    if (!isAuthorized) {
      throw new BadRequestException(`User ${approverId} is not an authorized approver for this request`);
    }

    const existingVotes: IVote[] = approval.votes || [];
    const voteIndex = existingVotes.findIndex((v) => v.approverId === approverId);

    const newVote: IVote = {
      approverId,
      decision,
      comment,
      timestamp: new Date(),
    };

    if (voteIndex >= 0) {
      existingVotes[voteIndex] = newVote;
    } else {
      existingVotes.push(newVote);
    }

    const evaluatedStatus = this.evaluateStrategy(approval.approvalStrategy, approval.requiredApprovers, existingVotes);

    let approvedAt: Date | null = null;
    if (evaluatedStatus === APPROVAL_STATUS.APPROVED) {
      approvedAt = new Date();
    }

    const updatedApproval = await this.instanceRepo.updateApproval(approval.id, {
      votes: existingVotes,
      status: evaluatedStatus,
      comment: comment || approval.comment || null,
      approvedAt,
    });

    const statusChanged = evaluatedStatus !== APPROVAL_STATUS.PENDING;

    if (statusChanged && this.eventBus) {
      if (evaluatedStatus === APPROVAL_STATUS.APPROVED) {
        await this.eventBus.publish(
          new ApprovalGrantedEvent({
            tenantId: updatedApproval.tenantId,
            organizationId: updatedApproval.organizationId,
            payload: {
              instanceId: updatedApproval.instanceId,
              stepId: updatedApproval.stepId,
              approvalId: updatedApproval.id,
              approverId,
              comment,
            },
          })
        );
      } else if (evaluatedStatus === APPROVAL_STATUS.REJECTED) {
        await this.eventBus.publish(
          new ApprovalRejectedEvent({
            tenantId: updatedApproval.tenantId,
            organizationId: updatedApproval.organizationId,
            payload: {
              instanceId: updatedApproval.instanceId,
              stepId: updatedApproval.stepId,
              approvalId: updatedApproval.id,
              approverId,
              reason: comment,
            },
          })
        );
      }
    }

    await this.instanceRepo.addExecutionLog({
      instanceId: updatedApproval.instanceId,
      stepId: updatedApproval.stepId,
      event: statusChanged ? `Approval${evaluatedStatus}` : 'VoteRecorded',
      message: `Approver ${approverId} voted ${decision} on step ${updatedApproval.stepId}. New status: ${evaluatedStatus}`,
      details: { approverId, decision, comment, approvalStatus: evaluatedStatus },
    });

    return {
      approval: updatedApproval,
      statusChanged,
      finalStatus: evaluatedStatus,
    };
  }

  /**
   * Evaluates if voting criteria for an approval strategy is satisfied.
   */
  evaluateStrategy(
    strategy: string,
    requiredApprovers: string[],
    votes: IVote[]
  ): string {
    if (votes.some((v) => v.decision === 'REJECTED')) {
      return APPROVAL_STATUS.REJECTED;
    }

    const approvedVotes = votes.filter((v) => v.decision === 'APPROVED');

    switch (strategy) {
      case APPROVAL_STRATEGY.SINGLE:
      case APPROVAL_STRATEGY.DELEGATED:
      case APPROVAL_STRATEGY.ROLE_BASED:
        return approvedVotes.length >= 1 ? APPROVAL_STATUS.APPROVED : APPROVAL_STATUS.PENDING;

      case APPROVAL_STRATEGY.ALL:
        const totalRequired = requiredApprovers.length > 0 ? requiredApprovers.length : 1;
        return approvedVotes.length >= totalRequired ? APPROVAL_STATUS.APPROVED : APPROVAL_STATUS.PENDING;

      case APPROVAL_STRATEGY.MAJORITY:
        const total = requiredApprovers.length > 0 ? requiredApprovers.length : 1;
        const requiredMajority = Math.floor(total / 2) + 1;
        return approvedVotes.length >= requiredMajority ? APPROVAL_STATUS.APPROVED : APPROVAL_STATUS.PENDING;

      case APPROVAL_STRATEGY.SEQUENTIAL:
        // In sequential mode, all must approve in order
        const reqTotal = requiredApprovers.length > 0 ? requiredApprovers.length : 1;
        return approvedVotes.length >= reqTotal ? APPROVAL_STATUS.APPROVED : APPROVAL_STATUS.PENDING;

      default:
        return approvedVotes.length >= 1 ? APPROVAL_STATUS.APPROVED : APPROVAL_STATUS.PENDING;
    }
  }
}
