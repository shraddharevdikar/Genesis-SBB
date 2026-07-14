export interface Latency {
  readonly latencyId: string;
  readonly tenantId: string;
  readonly targetEngineId: string;
  readonly operationName: string;
  readonly averageMs: number;
  readonly p50Ms: number;
  readonly p95Ms: number;
  readonly p99Ms: number;
  readonly totalSamplesCount: number;
  readonly recordedAt: Date;
}
