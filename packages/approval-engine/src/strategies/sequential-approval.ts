import { ApprovalStep } from '../models/approval-step.js';
import { Approver } from '../participants/approver.js';

export interface SequentialApprovalStrategy {
  /**
   * Defines and maps sequential order of execution step routing.
   */
  resolveSequence(
    step: ApprovalStep
  ): Promise<{ orderedApprovers: Approver[] }>;
}
