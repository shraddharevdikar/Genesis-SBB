import { AuthorityId } from '../identity/authority-id.js';

export interface DecisionRight {
  readonly decisionRightId: string;
  readonly parentAuthorityId: AuthorityId;
  readonly uniqueDecisionCode: string; // e.g. "APPROVE_CAPEX_OVER_10K"
  readonly shortTitleString: string;
  readonly riskThresholdScoreValue: number; // e.g. 1 (low) - 5 (high)
  readonly requiresConsensusApproval: boolean;
}
