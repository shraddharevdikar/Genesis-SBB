import { CandidateId } from './candidate.js';

export type InterviewTypeCode =
  | 'INITIAL_RECRUITER_SCREEN'
  | 'TECHNICAL_CODING_PRACTICAL'
  | 'SYSTEM_DESIGN_ARCHITECTURE'
  | 'CULTURE_FIT_VALUES'
  | 'EXECUTIVE_ROUND';

export interface InterviewerRatingRecord {
  readonly interviewerOperatorRoleId: string;
  readonly overallScoreNumeric: number; // e.g. 1 to 5 stars
  readonly competencyRatingsList: {
    readonly competencyName: string;
    readonly ratingNumeric: number;
  }[];
  readonly directFeedbackNotes: string;
  readonly decisionRecommendation: 'STRONG_HIRE' | 'HIRE' | 'NO_HIRE' | 'STRONG_NO_HIRE';
}

export interface Interview {
  readonly interviewId: string;
  readonly uniqueInterviewCode: string; // e.g. "INT-2026-07-004"
  readonly candidateId: CandidateId;
  readonly targetRequisitionIdString: string;
  readonly interviewType: InterviewTypeCode;
  readonly scheduledAt: Date;
  readonly durationMinutesCount: number;
  readonly completedFlag: boolean;
  readonly evaluationRatingsList: InterviewerRatingRecord[];
  readonly aggregateAverageScoreNumeric: number;
  readonly overallRecommendationCode: 'PROCEED' | 'HOLD' | 'REJECT';
}
