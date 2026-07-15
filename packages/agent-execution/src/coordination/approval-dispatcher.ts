import { ExecutionContext } from '../core/execution-context.js';

export interface ApprovalDispatcher {
  /**
   * Dispatches an interactive request for verification or signature to human supervisors.
   */
  requestSupervisorApproval(
    tenantId: string,
    executionId: string,
    checkpointId: string,
    requiredRolesList: string[],
    context: ExecutionContext
  ): Promise<{
    readonly approvalRequestId: string;
    readonly status: 'PENDING' | 'GRANTED' | 'REJECTED';
  }>;

  /**
   * Checks the status of an ongoing human/supervisor override request.
   */
  checkApprovalStatus(
    tenantId: string,
    approvalRequestId: string,
    context: ExecutionContext
  ): Promise<'PENDING' | 'GRANTED' | 'REJECTED'>;
}
