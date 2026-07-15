export interface ContributionPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly minAgentConfidenceThreshold: number; // e.g. 0.80 minimum confidence to insert without dual-signoff
  readonly autoApproveLowRiskCategories: boolean;
  readonly restrictedKeywords: string[]; // Forbidden terms that block automated commits
  readonly lastModifiedAt: Date;
}
