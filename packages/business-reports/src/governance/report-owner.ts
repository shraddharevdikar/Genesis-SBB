export interface ReportOwner {
  readonly ownerId: string;
  readonly departmentOwnerIdString: string; // e.g. "DEP-LEGAL"
  readonly accountableOperatorRoleIdString: string; // e.g. "ROLE-GC"
  readonly backupAccountableOperatorRoleIdString?: string;
  readonly lastCertifiedAt: Date;
}
