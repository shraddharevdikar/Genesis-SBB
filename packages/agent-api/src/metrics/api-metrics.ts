export interface ApiMetrics {
  readonly metricId: string;
  readonly tenantId: string;
  readonly totalRequestsCount: number;
  readonly successfulRequestsCount: number;
  readonly failedRequestsCount: number;
  readonly averageLatencyMsValue: number;
  readonly measuredAt: Date;
}
