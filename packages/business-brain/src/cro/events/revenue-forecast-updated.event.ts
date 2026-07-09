export interface RevenueForecastUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly forecastId: string;
  readonly totalAnnualTargetUSD: number;
  readonly expectedQuarterlyArrUSD: number;
  readonly forecastConfidenceScore: number;
  readonly updatedBy: string;
  readonly timestamp: Date;
}
