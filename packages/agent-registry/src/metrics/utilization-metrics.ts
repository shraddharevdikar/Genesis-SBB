export interface UtilizationMetrics {
  readonly metricsId: string;
  readonly tenantId: string;
  readonly averageWorkforceUtilizationRatio: number; // 0.0 - 1.0 active load ratio
  readonly peekUtilizationHourRatio: number;
  readonly averageQueueWaitTimeSeconds: number;
  readonly activeTasksOverCapacityCount: number;
  readonly recordedAt: Date;
}
