export interface UsagePattern {
  readonly patternId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly productId: string;
  readonly peakUsageTimeOfDay?: string; // e.g. "09:00 - 11:00 UTC"
  readonly weeklyUsageTrend: 'GROWING' | 'STABLE' | 'DECLINING' | 'ERRATIC';
  readonly queryVolumeAvgDaily: number;
  readonly dataProcessedBytesAvgDaily?: number;
  readonly errorRateAvgPercent: number;
  readonly latencyAvgMs: number;
  readonly recordedPeriod: string; // e.g., "June 2026"
}
