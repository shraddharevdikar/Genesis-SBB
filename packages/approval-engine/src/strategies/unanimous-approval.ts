import { ApprovalStep } from '../models/approval-step.js';

export interface UnanimousApprovalStrategy {
  /**
   * Asserts total participation from listed approvers.
   */
  assertUnanimity(
    step: ApprovalStep,
    approvedCount: number
  ): Promise<{ isUnanimous: boolean; discrepancyCount: number }>;
}
