export interface CollaborationContext {
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly securityClearanceLevelCode: string; // Min level required for collaboration participants
  readonly initiatingDepartmentCode: string; // e.g. "SBB_INFRASTRUCTURE" or "SBB_TRAFFIC_MGMT"
  readonly timestamp: Date;
}
