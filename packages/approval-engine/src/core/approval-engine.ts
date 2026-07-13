import { ApprovalId } from '../identity/approval-id.js';
import { ApprovalInstanceId } from '../identity/approval-instance-id.js';
import { ApprovalRequestId } from '../identity/approval-request-id.js';
import { ApprovalChain } from '../models/approval-chain.js';
import { ApprovalInstance } from './approval-instance.js';
import { ApprovalRequest } from './approval-request.js';
import { Approver } from '../participants/approver.js';
import { ApprovalDecision } from './approval-decision.js';

export interface ApprovalEngine {
  /**
   * Registers or compiles an Approval Chain topology definition.
   */
  createApproval(
    tenantId: string,
    chain: Omit<ApprovalChain, 'createdAt'>,
    initiatedByRoleId: string
  ): Promise<ApprovalChain>;

  /**
   * Dynamically resolves and assigns Approvers to active nodes based on contextual roles or conditions.
   */
  assignApprovers(
    tenantId: string,
    instanceId: ApprovalInstanceId,
    stepId: string,
    approvers: Approver[]
  ): Promise<boolean>;

  /**
   * Evaluates the active step strategies (Sequential, Parallel, Quorum, Unanimous).
   */
  evaluateApproval(
    tenantId: string,
    instanceId: ApprovalInstanceId,
    decision: ApprovalDecision
  ): Promise<ApprovalInstance>;

  /**
   * Evaluates escalation time thresholds and routes the decision up.
   */
  escalateApproval(
    tenantId: string,
    instanceId: ApprovalInstanceId,
    stepId: string,
    escalationRoleId: string,
    reason: string
  ): Promise<ApprovalInstance>;

  /**
   * Redirects signature accountability to a delegated participant.
   */
  delegateApproval(
    tenantId: string,
    instanceId: ApprovalInstanceId,
    originalApproverId: string,
    delegatedApproverId: string,
    reason: string
  ): Promise<ApprovalInstance>;

  /**
   * Finalizes the execution, logging the cryptographic audit signatures.
   */
  completeApproval(
    tenantId: string,
    instanceId: ApprovalInstanceId,
    payload: Record<string, any>,
    actedByRoleId: string
  ): Promise<ApprovalInstance>;

  /**
   * Executes rejection routines, resetting or freezing downstream chains.
   */
  rejectApproval(
    tenantId: string,
    instanceId: ApprovalInstanceId,
    rejectionReason: string,
    actedByRoleId: string
  ): Promise<ApprovalInstance>;
}
