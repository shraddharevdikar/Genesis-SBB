export interface PricingTier {
  readonly tierId: string;
  readonly name: string; // e.g. "Growth", "Enterprise"
  readonly basePriceUSD: number;
  readonly chargePeriod: 'MONTHLY' | 'ANNUAL' | 'ONE_TIME';
  readonly pricingModelType: 'FLAT_RATE' | 'PER_USER' | 'USAGE_BASED' | 'TIERED';
}

export interface PricingStrategy {
  readonly strategyId: string;
  readonly tenantId: string;
  readonly strategyName: string; // e.g. "Value-Based Enterprise"
  readonly targetProfitMarginPercent: number;
  readonly pricingTiers: PricingTier[];
  readonly competitivePricePositioning: 'BELOW_MARKET' | 'AT_MARKET' | 'PREMIUM_ABOVE_MARKET';
  readonly isApproved: boolean;
  readonly updatedAt: Date;
}
