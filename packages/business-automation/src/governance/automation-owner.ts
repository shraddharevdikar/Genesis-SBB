export interface AutomationOwner {
  readonly ownerId: string;
  readonly departmentOwnerIdString: string; // e.g. "DEP-FINANCE"
  readonly accountableOperatorRoleIdString: string; // e.g. "ROLE-CFO"
  readonly backupAccountableOperatorRoleIdString?: string;
  readonly lastCertifiedAt: Date;
}
