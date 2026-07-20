export type RecommendationPriorityCode =
  | 'LOW_ADVISORY'
  | 'MEDIUM_TACTICAL'
  | 'HIGH_URGENT'
  | 'CRITICAL_IMMEDIATE_ACTION';

export interface RecommendationPriority {
  readonly priorityCode: RecommendationPriorityCode;
  readonly absoluteNumericalWeight: number; // e.g. 0-100 score
  readonly requiredReviewDurationHoursCount: number; // deadline to review before expiry
}
