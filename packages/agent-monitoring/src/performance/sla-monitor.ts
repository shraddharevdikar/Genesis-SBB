export interface SlaMonitor {
  readonly monitorId: string;
  readonly tenantId: string;
  readonly contractAgreementCode: string; // e.g. "SBB_TIMETABLE_RESPONSE_SLA"
  readonly targetThresholdDurationMs: number;
  readonly maximumObservedLatencyMs: number;
  readonly averageObservedLatencyMs: number;
  readonly activeSlaLagViolationsCount: number;
  readonly percentageWithinLimits: number; // 0.0 - 100.0
  readonly computedAt: Date;
}
