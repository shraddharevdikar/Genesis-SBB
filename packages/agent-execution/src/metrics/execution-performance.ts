export interface ExecutionPerformance {
  readonly metricId: string;
  readonly targetExecutionId: string;
  readonly totalExecutionDurationMs: number;
  readonly averageStepDurationMs: number;
  readonly coordinationOverheadDurationMs: number; // Idle time between steps spent waiting on dispatchers
  readonly totalRollbackDurationMs: number;
  readonly computedAt: Date;
}
