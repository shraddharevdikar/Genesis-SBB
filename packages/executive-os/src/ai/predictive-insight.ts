export interface PredictiveInsight {
  readonly insightId: string;
  readonly uniqueInsightCode: string; // e.g. "PDR-INS-CH-MARKET-SATURATION"
  readonly targetVariableString: string; // e.g. "EBITDA Margin" or "Employee Attrition"
  readonly simulatedTimeHorizonMonthsCount: number; // e.g. 18 months
  readonly predictedTrendDirection: 'IMPROVING' | 'STABLE' | 'DEGRADING_RISK';
  readonly expectedValueAtHorizonDecimal: number;
  readonly probabilityOfDegradationRatioDecimal: number; // e.g. 0.35 (35% probability of degrading)
  readonly contributingFactorsList: string[];
  readonly preventiveActionRecommendationText: string;
  readonly generatedAt: Date;
}
