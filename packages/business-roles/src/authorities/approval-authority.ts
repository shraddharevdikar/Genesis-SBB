import { AuthorityId } from '../identity/authority-id.js';

export interface ApprovalAuthority {
  readonly approvalId: string;
  readonly baseAuthorityId: AuthorityId;
  readonly categoryCode: 'BUDGET_DISBURSEMENT' | 'POLICY_OVERRIDE' | 'ROSTER_MUTATION' | 'SLA_SIGN_OFF';
  readonly maximumLimitChf: number;
  readonly strictHigherReviewEscalationRequired: boolean;
}
