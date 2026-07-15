export interface ApiPerformance {
  readonly performanceId: string;
  readonly tenantId: string;
  readonly targetService: string;
  readonly requestThroughputPerSecond: number;
  readonly averageResponseTimeMs: number;
  readonly p50LatencyMs: number;
  readonly p95LatencyMs: number;
  readonly p99LatencyMs: number;
  readonly bandwidthConsumptionKb: number;
  readonly recordedAt: Date;
}
