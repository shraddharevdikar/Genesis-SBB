export interface IntelligenceOwner {
  readonly ownerId: string;
  readonly departmentOwnerIdString: string; // e.g. "DEP-FINANCE" or "DEP-EXECUTIVE"
  readonly accountableOperatorRoleIdString: string; // e.g. "ROLE-CFO" or "ROLE-CEO"
  readonly backupAccountableOperatorRoleIdString?: string;
  readonly lastCertifiedAt: Date;
}
