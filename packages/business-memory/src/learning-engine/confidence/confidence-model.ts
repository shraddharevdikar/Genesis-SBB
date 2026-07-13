export interface ConfidenceScore {
  readonly value: number; // 0 to 100
  readonly weight: number; // 0.0 to 1.0
  readonly classification: 'HIGH_CERTAINTY' | 'MODERATE_CERTAINTY' | 'LOW_CERTAINTY';
}

export interface ConfidenceModel {
  readonly aggregateConfidence: number; // Composite score 0 to 100
  readonly evidenceBaseCount: number;
  readonly dataFreshnessDays: number;
  readonly dimensionScores: {
    readonly analyticalConfidence: ConfidenceScore;
    readonly historicalConsistency: ConfidenceScore;
    readonly stakeholderConsensus: ConfidenceScore;
  };
}
