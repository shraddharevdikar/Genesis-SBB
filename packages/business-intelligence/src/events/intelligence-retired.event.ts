export interface IntelligenceRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredIntelligenceScopeId: string;
  readonly uniqueScopeCode: string;
  readonly retiredByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
