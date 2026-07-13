export interface WorkloadMetrics {
  readonly metricsId: string;
  readonly tenantId: string;
  readonly assigneeId: string;
  readonly totalAssignedCount: number;
  readonly openTasksCount: number;
  readonly highPriorityTasksCount: number;
  readonly estimatedBacklogMinutes: number;
  readonly lastCalculatedAt: Date;
}
