export interface ExecutiveRelationship {
  readonly relationshipId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly customerExecutiveRoleId: string; // references Stakeholder / Contact
  readonly internalExecutiveRoleId: string; // references SBB internal organizational role
  readonly status: 'ACTIVE' | 'DORMANT' | 'NOT_ESTABLISHED';
  readonly strengthScore: number; // 0 to 100
  readonly primaryAlignmentFocus: string; // e.g., "Strategy Coordination"
  readonly lastExecutiveMeetingAt?: Date;
  readonly notes?: string;
}
