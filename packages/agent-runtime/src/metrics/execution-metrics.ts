export interface ExecutionMetrics {
  readonly metricsId: string;
  readonly tenantId: string;
  readonly sessionId: string;
  readonly averageStepDurationMs: number;
  readonly p50LatencyMs: number;
  readonly p95LatencyMs: number;
  readonly p99LatencyMs: number;
  readonly totalExecutionOperations: number;
  readonly errorRatio: number; // 0.0 - 1.0
  readonly recordedAt: Date;
}
