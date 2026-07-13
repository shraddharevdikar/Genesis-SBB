import { ApprovalStep } from '../models/approval-step.js';
import { Approver } from '../participants/approver.js';

export interface ParallelApprovalStrategy {
  /**
   * Maps multiple paths of parallel execution.
   */
  resolveParallelNodes(
    step: ApprovalStep
  ): Promise<{ targetApprovers: Approver[] }>;
}
