export interface ExecutionContext {
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly initiatorId: string; // e.g. agent participant or supervisor ID
  readonly securityClearanceLevelCode: string; // Enforce execution security boundaries
  readonly timestamp: Date;
}
