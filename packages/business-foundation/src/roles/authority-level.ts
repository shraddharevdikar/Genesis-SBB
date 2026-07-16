export type AuthorityTierCode =
  | 'EXECUTIVE'
  | 'DIRECTOR'
  | 'MANAGER'
  | 'SPECIALIST'
  | 'ANALYST'
  | 'COORDINATOR';

export interface AuthorityLevel {
  readonly tier: AuthorityTierCode;
  readonly levelRatingValue: number; // e.g. 1 (lowest) to 10 (highest)
  readonly signatureBudgetLimitChf: number; // Financial spending authority limit in CHF
  readonly approvalRequiredTierCode?: AuthorityTierCode;
}
