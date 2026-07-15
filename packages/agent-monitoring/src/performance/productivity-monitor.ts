export interface ProductivityMonitor {
  readonly monitorId: string;
  readonly tenantId: string;
  readonly agentId?: string; // Optional filter for single-agent tracking
  readonly countOfTasksAssigned: number;
  readonly countOfTasksCompleted: number;
  readonly countOfTasksCancelled: number;
  readonly tasksSuccessRatio: number; // 0.0 - 1.0
  readonly averageTasksThroughputPerHour: number;
  readonly computedAt: Date;
}
