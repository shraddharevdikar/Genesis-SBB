export type ReviewCycleCode =
  | 'MONTHLY'
  | 'QUARTERLY'
  | 'SEMI_ANNUALLY'
  | 'ANNUALLY'
  | 'BI_ANNUALLY';

export interface PolicyReviewCycle {
  readonly cycleId: string;
  readonly recurrenceCode: ReviewCycleCode;
  readonly lastCompletedReviewAt: Date;
  readonly nextScheduledReviewAt: Date;
  readonly automatedAlertNotificationLeadDaysCount: number; // e.g. 15 days warning before due date
}
