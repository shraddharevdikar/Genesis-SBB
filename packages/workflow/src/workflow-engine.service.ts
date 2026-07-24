import { Injectable, Logger, NotFoundException, BadRequestException } from '@nestjs/common';
import { WorkflowDefinitionService } from './workflow-definition.service.js';
import { WorkflowInstanceService } from './workflow-instance.service.js';
import { WorkflowExecutionService } from './workflow-execution.service.js';
import { ApprovalService } from './approval.service.js';
import { WorkflowInstanceRepository } from './repositories/workflow-instance.repository.js';
import { ExecuteWorkflowDto } from './dto/execute-workflow.dto.js';
import { ApproveStepDto } from './dto/approve-step.dto.js';
import { RejectStepDto } from './dto/reject-step.dto.js';
import { IWorkflowInstance } from './interfaces/workflow-instance.interface.js';
import { WORKFLOW_STATUS, STEP_STATUS } from './constants/workflow.constants.js';

@Injectable()
export class WorkflowEngineService {
  private readonly logger = new Logger(WorkflowEngineService.name);

  constructor(
    private readonly definitionService: WorkflowDefinitionService,
    private readonly instanceService: WorkflowInstanceService,
    private readonly executionService: WorkflowExecutionService,
    private readonly approvalService: ApprovalService,
    private readonly instanceRepo: WorkflowInstanceRepository
  ) {}

  /**
   * Starts a new workflow instance from a definition ID and executes it.
   */
  async startWorkflow(definitionId: string, dto: ExecuteWorkflowDto): Promise<IWorkflowInstance> {
    const definition = await this.definitionService.getDefinition(definitionId, dto.tenantId);

    const instance = await this.instanceRepo.createInstance({
      definitionId: definition.id,
      name: definition.name,
      version: definition.version,
      status: WORKFLOW_STATUS.PENDING,
      tenantId: dto.tenantId || definition.tenantId || null,
      organizationId: dto.organizationId || definition.organizationId || null,
      userId: dto.userId || null,
      context: {
        variables: dto.variables || {},
        stepResults: {},
        correlationId: dto.correlationId,
      },
      input: dto.input,
    });

    return this.executionService.executeInstance(instance.id);
  }

  /**
   * Approves a pending step and resumes workflow execution.
   */
  async approveStep(instanceId: string, dto: ApproveStepDto): Promise<IWorkflowInstance> {
    const instance = await this.instanceService.getInstance(instanceId, dto.tenantId);

    const approvalResult = await this.approvalService.castVote(
      instanceId,
      dto.stepId,
      dto.approverId,
      'APPROVED',
      dto.comment,
      dto.tenantId
    );

    if (approvalResult.statusChanged && approvalResult.finalStatus === 'APPROVED') {
      // Find step execution waiting for approval and update to COMPLETED
      if (instance.currentStepId) {
        const stepExec = await this.instanceRepo.findStepExecution(instanceId, instance.currentStepId);
        if (stepExec) {
          await this.instanceRepo.updateStepExecution(stepExec.id, {
            status: STEP_STATUS.COMPLETED,
            completedAt: new Date(),
          });
        }
      }

      // Resume execution
      return this.executionService.executeInstance(instanceId);
    }

    return this.instanceService.getInstance(instanceId, dto.tenantId);
  }

  /**
   * Rejects a pending step and fails/cancels workflow execution.
   */
  async rejectStep(instanceId: string, dto: RejectStepDto): Promise<IWorkflowInstance> {
    const instance = await this.instanceService.getInstance(instanceId, dto.tenantId);

    const approvalResult = await this.approvalService.castVote(
      instanceId,
      dto.stepId,
      dto.approverId,
      'REJECTED',
      dto.reason,
      dto.tenantId
    );

    if (instance.currentStepId) {
      const stepExec = await this.instanceRepo.findStepExecution(instanceId, instance.currentStepId);
      if (stepExec) {
        await this.instanceRepo.updateStepExecution(stepExec.id, {
          status: STEP_STATUS.REJECTED,
          error: dto.reason || 'Step rejected by approver',
          completedAt: new Date(),
        });
      }
    }

    await this.instanceRepo.updateInstance(instanceId, {
      status: WORKFLOW_STATUS.FAILED,
      errorMessage: `Step rejected by approver ${dto.approverId}. Reason: ${dto.reason || 'None provided'}`,
      completedAt: new Date(),
    });

    return this.instanceService.getInstance(instanceId, dto.tenantId);
  }

  /**
   * Restarts a workflow instance from step 1 or given step.
   */
  async restartWorkflow(instanceId: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    await this.instanceService.restartInstance(instanceId, tenantId);
    return this.executionService.executeInstance(instanceId);
  }

  /**
   * Resumes a paused workflow instance.
   */
  async resumeWorkflow(instanceId: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    await this.instanceService.resumeInstance(instanceId, tenantId);
    return this.executionService.executeInstance(instanceId);
  }

  /**
   * Pauses a running workflow instance.
   */
  async pauseWorkflow(instanceId: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    return this.instanceService.pauseInstance(instanceId, tenantId);
  }

  /**
   * Cancels a workflow instance.
   */
  async cancelWorkflow(instanceId: string, reason?: string, tenantId?: string | null): Promise<IWorkflowInstance> {
    return this.instanceService.cancelInstance(instanceId, reason, tenantId);
  }
}
