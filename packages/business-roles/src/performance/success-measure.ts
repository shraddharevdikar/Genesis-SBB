export interface SuccessMeasure {
  readonly measureId: string;
  readonly strategicOutcomeCode: string; // e.g. "BRAND_RECOGNITION"
  readonly successCriteriaMarkdownText: string;
  readonly weightScoreRating: number; // e.g. 1 (low weight) - 5 (high weight)
}
