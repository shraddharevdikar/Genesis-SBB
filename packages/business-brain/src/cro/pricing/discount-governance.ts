export interface DiscountThreshold {
  readonly roleLevel: 'ACCOUNT_EXECUTIVE' | 'SALES_DIRECTOR' | 'VP_SALES' | 'CRO_OR_CFO';
  readonly maxAllowedDiscountPercent: number; // e.g. 15 for 15%
}

export interface DiscountGovernance {
  readonly governanceId: string;
  readonly tenantId: string;
  readonly policyName: string;
  readonly thresholds: DiscountThreshold[];
  readonly requiresMultiSignoffForContractValueUSD: number; // e.g. contracts > $100,000 need double approval
  readonly isEnforced: boolean;
  readonly updatedAt: Date;
}
