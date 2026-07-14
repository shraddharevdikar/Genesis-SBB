export interface Throughput {
  readonly throughputId: string;
  readonly tenantId: string;
  readonly targetEngineId: string;
  readonly operationName: string; // e.g. "publishEvent" or "startWorkflow"
  readonly processedRequestsCount: number;
  readonly operationsPerSecond: number;
  readonly peakOperationsPerSecond: number;
  readonly windowDurationSeconds: number;
  readonly recordedAt: Date;
}
