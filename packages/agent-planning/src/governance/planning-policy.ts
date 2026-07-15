export interface PlanningPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly requireFourEyesReviewOnCriticalRisk: boolean; // True if CRITICAL priority plans need 2+ reviewers
  readonly maximumDurationMinutesAllowed: number; // Maximum timeline budget before automatic flag
  readonly maximumCostAllowedChf: number; // Maximum budget before escalation required
  readonly bannedOperationsList: string[]; // List of unsafe skill codes or patterns
  readonly lastModifiedAt: Date;
}
