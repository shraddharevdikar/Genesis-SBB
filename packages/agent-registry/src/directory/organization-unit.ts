export interface OrganizationUnit {
  readonly unitId: string;
  readonly code: string; // e.g. "SBB-CH-OPS"
  readonly name: string; // e.g. "SBB Swiss Passenger Operations"
  readonly description: string;
  readonly headOfUnitRoleId: string; // Supervision manager role
}
