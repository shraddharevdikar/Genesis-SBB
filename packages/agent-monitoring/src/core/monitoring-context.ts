export interface MonitoringContext {
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly operatorId: string; // The user, admin, or automated process invoking monitoring tasks
  readonly timestamp: Date;
}
