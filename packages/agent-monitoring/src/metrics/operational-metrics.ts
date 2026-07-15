export interface OperationalMetrics {
  readonly metricId: string;
  readonly tenantId: string;
  readonly averageExecutionSuccessRatio: number; // 0.0 - 1.0
  readonly averagePlanStepDivergencePercent: number; // 0.0 - 100.0
  readonly totalRetriesTriggeredCount: number;
  readonly totalRollbacksExecutedCount: number;
  readonly meanTimeToRecoverMs: number;
  readonly activeLeaseConflictCount: number;
  readonly computedAt: Date;
}
