export type HealthStatusCode = 'HEALTHY' | 'DEGRADED_PERFORMANCE' | 'SUSPENDED_ERRORS';

export interface AutomationHealth {
  readonly healthId: string;
  readonly targetAutomationIdString: string;
  readonly status: HealthStatusCode;
  readonly consecutiveFailuresCount: number;
  readonly lastFailureAt?: Date;
  readonly failureReasonSummaryText?: string;
  readonly heartbeatCheckedAt: Date;
}
