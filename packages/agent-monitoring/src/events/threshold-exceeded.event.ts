export interface ThresholdExceededEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly metricNameString: string; // e.g. "observedLatencyMs"
  readonly thresholdLimitValue: number;
  readonly observedValue: number;
  readonly sourceAgentId?: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
