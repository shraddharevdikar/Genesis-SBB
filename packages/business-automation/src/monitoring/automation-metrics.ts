export interface AutomationMetrics {
  readonly metricsId: string;
  readonly targetAutomationIdString: string;
  readonly totalRunsCount: number;
  readonly successRunsCount: number;
  readonly failureRunsCount: number;
  readonly successRateRatio: number; // e.g. 0.992
  readonly failureRateRatio: number; // e.g. 0.008
  readonly averageLatencyMillisecondsCount: number;
  readonly totalSlaViolationsTriggeredCount: number;
  readonly lastCalculatedAt: Date;
}
