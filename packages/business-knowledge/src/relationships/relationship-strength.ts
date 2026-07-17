export interface RelationshipStrength {
  readonly strengthWeightPercentage: number; // e.g. 0.0 (no impact) to 100.0 (absolute determinism)
  readonly lastEvaluatedAt: Date;
  readonly calculatedConfidenceScore: number; // confidence in relationship strength
  readonly methodologyNotes?: string;
}
