export interface SurveyQuestion {
  readonly questionId: string;
  readonly questionText: string;
  readonly categoryCode: 'ENGAGEMENT' | 'MANAGEMENT_TRUST' | 'TOOLING_RESOURCES' | 'PSYCHOLOGICAL_SAFETY';
  readonly metricType: 'SCORE_1_TO_10' | 'FREE_TEXT';
}

export interface SurveyResponse {
  readonly responseId: string;
  readonly ratingScoreNumeric?: number; // e.g. 1-10
  readonly openTextFeedbackText?: string;
  readonly questionIdString: string;
}

export interface EmployeeSurvey {
  readonly surveyId: string;
  readonly uniqueSurveyCode: string; // e.g. "SRV-ENPS-2026-Q3"
  readonly titleString: string;
  readonly targetDepartmentIdString?: string; // Empty means company-wide
  readonly questionsList: SurveyQuestion[];
  readonly responsesCount: number;
  readonly aggregateEnpsScoreNumeric?: number; // Net Promoter Score calculation (-100 to +100)
  readonly launchDate: Date;
  readonly closeDate: Date;
  readonly activeFlag: boolean;
}
