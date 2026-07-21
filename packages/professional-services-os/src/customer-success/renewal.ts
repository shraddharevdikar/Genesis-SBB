export type RenewalStatusCode = 'NOT_STARTED' | 'UNDER_DISCUSSION' | 'PROPOSAL_SUBMITTED' | 'RENEWAL_SIGNED' | 'LAPSED_CHURNED';

export interface Renewal {
  readonly renewalId: string;
  readonly uniqueRenewalCode: string; // e.g. "RNW-CLI-1024-2026"
  readonly associatedClientIdString: string; // Links to Client
  readonly associatedActiveEngagementIdString: string; // Links to current Engagement expiration
  readonly plannedRenewalStartDate: Date;
  readonly projectedRenewalValueAmount: number; // Potential TCV value (SalesOS opportunity link)
  readonly clientLikelihoodToRenewScoreDecimal: number; // e.g. 0.85 (85% probability)
  readonly expansionUpsellOpportunityValueAmount: number; // Additional services added
  readonly status: RenewalStatusCode;
  readonly notesCommentsText?: string;
  readonly targetDecisionDeadlineDate: Date;
  readonly lastModifiedAt: Date;
}
