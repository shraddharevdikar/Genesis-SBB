export interface CampaignTimeline {
  readonly timelineId: string;
  readonly plannedStartDate: Date;
  readonly plannedEndDate: Date;
  readonly actualStartDate?: Date;
  readonly actualEndDate?: Date;
  readonly totalPlannedDaysCount: number;
  readonly daysRemainingCount: number;
  readonly isExtendedFlag: boolean;
}
