export type AchievementStatusCode =
  | 'NOT_STARTED'
  | 'ON_TRACK'
  | 'AT_RISK'
  | 'LAGGING'
  | 'ACHIEVED'
  | 'MISSED';

export interface AchievementStatus {
  readonly code: AchievementStatusCode;
  readonly confidenceScoreRating: number; // e.g. 1 to 5
  readonly lastEvaluatedAt: Date;
  readonly blockerExplanationNotes?: string;
}
