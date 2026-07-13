import { ApprovalStep } from '../models/approval-step.js';

export interface QuorumApprovalStrategy {
  /**
   * Maps dynamic validation rules to assert quorum satisfaction ratio.
   */
  evaluateQuorum(
    step: ApprovalStep,
    totalSignatures: number
  ): Promise<{ quorumMet: boolean; remainingSignaturesRequired: number }>;
}
