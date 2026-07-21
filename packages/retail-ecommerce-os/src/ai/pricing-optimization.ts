export interface PricingOptimizationRecommendation {
  readonly recommendationId: string;
  readonly uniqueRecommendationCode: string; // e.g., "PRC-OPT-IPHONE-15"
  readonly targetSkuCodeString: string;
  readonly currentPriceAmount: number;
  readonly optimalPriceAmount: number;
  readonly suggestedMarkdownPercentageDecimal: number; // e.g. 0.15 for a 15% markdown
  readonly priceElasticityEstimateDecimal: number; // e.g. -1.8 (highly elastic)
  readonly predictedQuantityLiftPercentageDecimal: number; // e.g. 0.35 (35% increase in velocity)
  readonly priorityLevel: 'LOW_ROUTINE' | 'MEDIUM_MARKDOWN_WARNING' | 'HIGH_LIQUIDATION_URGENT';
  readonly rationalBasisText: string;
  readonly calculatedAt: Date;
}
