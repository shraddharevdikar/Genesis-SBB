export interface QueryMetrics {
  readonly metricId: string;
  readonly tenantId: string;
  readonly responseTimeMs: number;
  readonly isCacheHit: boolean;
  readonly dataVolumeBytes: number;
  readonly measuredAt: Date;
}
