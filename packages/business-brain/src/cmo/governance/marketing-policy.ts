export interface MarketingPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly policyName: string;
  readonly maxSpendLimitPerCampaignUSD: number;
  readonly mandatedAttributionModels: ('FIRST_TOUCH' | 'LAST_TOUCH' | 'LINEAR' | 'W_SHAPED' | 'DATA_DRIVEN')[];
  readonly minimumAttributionConfidencePercent: number; // e.g. 70%
  readonly isEnforced: boolean;
  readonly updatedAt: Date;
}
