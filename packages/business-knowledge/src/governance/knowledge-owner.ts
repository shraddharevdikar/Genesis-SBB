export interface KnowledgeOwner {
  readonly ownerId: string;
  readonly departmentOwnerIdString: string; // e.g. "DEP-LEGAL"
  readonly accountableOperatorRoleIdString: string; // e.g. "ROLE-GC" (General Counsel)
  readonly backupAccountableOperatorRoleIdString?: string;
  readonly lastCertifiedAt: Date;
}
