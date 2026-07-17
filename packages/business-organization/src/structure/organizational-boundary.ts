export interface OrganizationalBoundary {
  readonly boundaryId: string;
  readonly unitScopeId: string; // e.g. businessUnitId or departmentId
  readonly targetTenantId: string;
  readonly allowedSovereignDataClassificationCodesList: string[]; // e.g. ["SOVEREIGN_CH", "SBB_INTERNAL"]
  readonly enforceHardIsolationBoundary: boolean;
  readonly crossBoundaryGatewayWhiteListParticipantIdsList: string[];
}
