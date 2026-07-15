export interface ImpactAnalysis {
  readonly analysisId: string;
  readonly targetGoalId: string;
  readonly financialCostImpactChf: number; // Quantitative Schweizer Franken cost impact
  readonly networkOperationalLoadFactor: number; // Projected impact on system performance (0.0 - 1.0)
  readonly riskTierRating: 'NEGLEGIBLE' | 'MINOR_COGNITIVE' | 'MODERATE' | 'SEVERE';
  readonly environmentalImpactRating: 'ECO_NEUTRAL' | 'ECO_EVALUATE' | 'REDUCES_EMISSIONS';
  readonly analyzedAt: Date;
}
