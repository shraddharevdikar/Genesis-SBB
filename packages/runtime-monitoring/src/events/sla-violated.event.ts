export interface SlaViolatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly violationId: string;
  readonly slaDefinitionId: string;
  readonly targetMetricName: string;
  readonly breachValue: number;
  readonly thresholdValue: number;
  readonly timestamp: Date;
}
