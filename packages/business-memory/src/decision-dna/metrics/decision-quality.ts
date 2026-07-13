export interface DecisionQuality {
  readonly qualityScore: number;
  readonly informationCompletenessRating: number;
  readonly cognitiveBiasRiskScore: number;
  readonly alignmentWithStrategicDirectivesScore: number;
  readonly alternativeEvaluationDepthScore: number;
}
