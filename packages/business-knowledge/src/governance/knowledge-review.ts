export type KnowledgeReviewRecurrenceCode =
  | 'MONTHLY'
  | 'QUARTERLY'
  | 'SEMI_ANNUALLY'
  | 'ANNUALLY'
  | 'EVENT_TRIGGERED';

export interface KnowledgeReview {
  readonly reviewId: string;
  readonly recurrence: KnowledgeReviewRecurrenceCode;
  readonly lastReviewedAt: Date;
  readonly nextScheduledReviewAt: Date;
  readonly reviewerOperatorRoleIdString: string;
  readonly approvedAt?: Date;
  readonly reviewNotesText?: string;
}
