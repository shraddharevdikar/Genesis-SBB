import { Approver } from '../participants/approver.js';
import { Delegate } from '../participants/delegate.js';

export interface DelegatedApprovalStrategy {
  /**
   * Resolves delegation overrides pathways.
   */
  resolveDelegates(
    approver: Approver,
    delegates: Delegate[]
  ): Promise<{ activeApprover: Approver }>;
}
