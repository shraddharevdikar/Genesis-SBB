export type PricingStrategyTypeCode =
  | 'FLAT_SUBSCRIPTION'
  | 'TIERED_VOLUME'
  | 'USAGE_BASED_METERED'
  | 'PROFESSIONAL_SERVICES_HOURLY'
  | 'CUSTOM_HYBRID';

export interface PricingModel {
  readonly modelId: string;
  readonly uniquePricingModelCode: string; // e.g. "PRC-TIERED-ENTERPRISE-2026"
  readonly displayName: string;
  readonly strategyType: PricingStrategyTypeCode;
  readonly minimumCommitmentAmount?: number;
  readonly basePriceAmount: number;
  readonly chargeFrequencyCode: 'ONCE' | 'MONTHLY' | 'ANNUALLY' | 'METERED_HOURLY';
  readonly priceModelRulesJson: string; // Stores tiered intervals or pricing multipliers
}
