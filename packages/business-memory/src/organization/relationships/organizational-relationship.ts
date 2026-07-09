export enum StructuralRelationshipType {
  BU_DEPENDS_ON_BU = 'BU_DEPENDS_ON_BU',
  DEPT_REPORTS_TO_BU = 'DEPT_REPORTS_TO_BU',
  TEAM_COLLABORATES_WITH_TEAM = 'TEAM_COLLABORATES_WITH_TEAM',
  CAPABILITY_REQUIRED_BY_PROCESS = 'CAPABILITY_REQUIRED_BY_PROCESS',
  INITIATIVE_BLOCKED_BY_INITIATIVE = 'INITIATIVE_BLOCKED_BY_INITIATIVE',
  ROLE_REPLACES_ROLE = 'ROLE_REPLACES_ROLE'
}

export interface OrganizationalRelationship {
  readonly relationshipId: string;
  readonly tenantId: string;
  readonly sourceEntityId: string; // ID of the source entity
  readonly sourceEntityType: 'BUSINESS_UNIT' | 'DEPARTMENT' | 'TEAM' | 'ROLE' | 'CAPABILITY' | 'INITIATIVE' | 'PROCESS';
  readonly targetEntityId: string;
  readonly targetEntityType: 'BUSINESS_UNIT' | 'DEPARTMENT' | 'TEAM' | 'ROLE' | 'CAPABILITY' | 'INITIATIVE' | 'PROCESS';
  readonly relationshipType: StructuralRelationshipType;
  readonly description?: string;
  readonly measuredImpactScore: number; // 0 to 100
  readonly recordedAt: Date;
}
