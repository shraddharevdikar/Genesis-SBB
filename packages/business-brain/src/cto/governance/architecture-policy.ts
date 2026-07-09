export interface ArchitecturePolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly policyName: string;
  readonly maxAllowedTechnicalDebtUSD: number;
  readonly minimumModularityRating: 'EXCELLENT' | 'ADEQUATE';
  readonly mandatedObservabilityFrameworks: string[];
  readonly buildVsBuyPolicyThresholdUSD: number;
  readonly isEnforced: boolean;
  readonly updatedAt: Date;
}
