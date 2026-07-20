export interface ProcurementPolicy {
  readonly policyId: string;
  readonly uniquePolicyCode: string; // e.g. "POL-PROC-THRESHOLD-AWS"
  readonly displayName: string;
  readonly policyDescriptionNotes: string;
  readonly minimumVendorSlaRatingScore: number; // e.g. 80
  readonly requiresCompetitiveBidsThresholdAmount: number; // e.g. Spend over 50k requires 3 bids
  readonly singleAutonomousSignatureLimitAmount: number; // e.g. Under 5k needs 1 signature
  readonly forbiddenVendorsCategoryCodesList: string[]; // List of categories to reject
  readonly isStrictlyEnforcedFlag: boolean;
}
