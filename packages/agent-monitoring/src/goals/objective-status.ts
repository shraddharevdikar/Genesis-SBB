export type MilestoneStatusType = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED' | 'BLOCKED' | 'ABANDONED';

export interface ObjectiveStatus {
  readonly objectiveId: string;
  readonly tenantId: string;
  readonly planId: string;
  readonly keyResultIndicatorsList: { description: string; value: string }[];
  readonly status: MilestoneStatusType;
  readonly expectedDeadlineDate: Date;
  readonly actualCompletionDate?: Date;
  readonly varianceDaysCount: number;
}
