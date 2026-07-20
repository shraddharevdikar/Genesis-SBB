export interface IntegrationOwner {
  readonly ownerId: string;
  readonly departmentOwnerIdString: string; // e.g. "DEP-SALES" or "DEP-IT"
  readonly accountableOperatorRoleIdString: string; // e.g. "ROLE-SALES-LEAD"
  readonly backupAccountableOperatorRoleIdString?: string;
  readonly lastCertifiedAt: Date;
}
