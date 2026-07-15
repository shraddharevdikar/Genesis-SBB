export interface PlanningContext {
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly securityClearanceLevelCode: string; // Min clearance level required for planning
  readonly initiatingDepartmentCode: string; // e.g., "SBB_MAINTENANCE_HQ"
  readonly timestamp: Date;
}
