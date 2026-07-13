export interface WorkloadBalance {
  readonly resourceId: string;
  readonly tenantId: string;
  readonly activeTasksCount: number;
  readonly totalAllocatedHours: number;
  readonly maxCapacityHours: number;
  readonly balanceScorePercentage: number;
  readonly calculatedAt: Date;
}
