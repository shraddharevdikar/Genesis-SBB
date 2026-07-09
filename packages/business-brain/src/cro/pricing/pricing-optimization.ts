export interface PriceElasticityIndicator {
  readonly planId: string;
  readonly planName: string;
  readonly estimatedElasticityIndex: number; // >1 is elastic, <1 inelastic
  readonly recommendedPriceAdjustmentPercent: number; // e.g. +10.0 for a 10% increase
  readonly projectedRevenueImpactUSD: number;
}

export interface PricingOptimization {
  readonly optimizationId: string;
  readonly tenantId: string;
  readonly targetProductCategory: string;
  readonly indicatorsList: PriceElasticityIndicator[];
  readonly optimizationRationale: string;
  readonly estimatedGrossMarginImpactUSD: number;
  readonly evaluatedAt: Date;
}
