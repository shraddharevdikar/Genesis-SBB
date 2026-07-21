export type CSatSurveyTypeCode = 'MID_PROJECT_CHECKPOINT' | 'END_OF_PROJECT_REVIEW' | 'ANNUAL_ACCOUNT_SATISFACTION';

export interface SatisfactionScoreRow {
  readonly ratingCategoryText: string; // e.g. "Value Delivered", "Team Professionalism"
  readonly scoreNumberRating: number; // 1 to 10
}

export interface Satisfaction {
  readonly satisfactionId: string;
  readonly uniqueSatisfactionCode: string; // e.g., "SAT-2026-CLOUD-ACME"
  readonly associatedClientIdString: string; // Links to Client
  readonly associatedEngagementIdString?: string; // Links to Engagement
  readonly surveyType: CSatSurveyTypeCode;
  readonly detailedScoreRatingsList: SatisfactionScoreRow[];
  readonly netPromoterScoreRating: number; // NPS score (-100 to +100 or raw 0 to 10)
  readonly clientRepresentativeFeedbackNotesText?: string; // Raw client comments
  readonly reviewTriggeredActionPlanText?: string; // QA intervention plan
  readonly practiceLeadershipAcknowledgedFlag: boolean;
  readonly submittedTimestamp: Date;
}
