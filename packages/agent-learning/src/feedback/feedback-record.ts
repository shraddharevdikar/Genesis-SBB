export type FeedbackSourceType = 'HUMAN' | 'AI_SELF' | 'CUSTOMER' | 'AUTOMATED_METRIC';

export interface FeedbackRecord {
  readonly feedbackId: string;
  readonly tenantId: string;
  readonly targetResourceId: string; // References the plan, execution, or skill
  readonly source: FeedbackSourceType;
  readonly raterParticipantId: string; // The person, agent, or service providing feedback
  readonly ratingScore: number; // Normalized rating, e.g. 1 to 5 or 0.0 to 1.0
  readonly qualitativeNotesText?: string;
  readonly capturedAt: Date;
}
