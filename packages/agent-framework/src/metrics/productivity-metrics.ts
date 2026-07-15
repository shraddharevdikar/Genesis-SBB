export interface ProductivityMetrics {
  readonly metricsId: string;
  readonly agentId: string;
  readonly tenantId: string;
  readonly goalsCompletedCount: number;
  readonly totalStepsExecutedCount: number;
  readonly averageGoalDurationSeconds: number;
  readonly busyStateRatio: number; // 0.0 - 1.0 (busy vs idle tracking)
  readonly calculatedAt: Date;
}
