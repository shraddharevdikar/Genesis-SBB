import { RuntimeContext } from '../core/runtime-context.js';
import { ExecutionStep } from '../planning/execution-step.js';

export interface HumanOversight {
  /**
   * Suspends execution to register dual-approvals required for restricted operations.
   */
  requestHumanApproval(
    tenantId: string,
    context: RuntimeContext,
    restrictedStep: ExecutionStep,
    assignedManagerRoleId: string
  ): Promise<{
    readonly approvalClaimId: string;
    readonly isApproved: boolean;
    readonly signedByRoleId?: string;
    readonly remarks?: string;
  }>;
}
