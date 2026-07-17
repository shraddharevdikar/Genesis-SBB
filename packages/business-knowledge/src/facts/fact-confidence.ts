export interface FactConfidence {
  readonly scaleRating: number; // e.g. 1 (very low) to 5 (absolute/mathematical certainty)
  readonly calculatedConfidenceRatio: number; // e.g. 0.0 - 1.0 (99.5% confidence)
  readonly evaluatorMethodName: string; // e.g. "LLM_SELF_CHECK", "CFO_MANUAL_REVIEW", "DATA_INTEGRITY_PULL"
  readonly assessedAt: Date;
}
