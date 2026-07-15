export interface GovernanceContext {
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly requesterId: string; // The actor (agent or human supervisor) invoking governance checking
  readonly securityClearanceLevelCode: string; // Boundary classification clearance checking
  readonly timestamp: Date;
}
