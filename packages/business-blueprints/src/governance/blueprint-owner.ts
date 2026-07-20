export interface BlueprintOwner {
  readonly ownerId: string;
  readonly departmentOwnerIdString: string; // e.g. "DEP-EXECUTIVE" or "DEP-IT"
  readonly accountableOperatorRoleIdString: string; // e.g. "ROLE-CEO" or "ROLE-PRODUCT-LEAD"
  readonly backupAccountableOperatorRoleIdString?: string;
  readonly lastCertifiedAt: Date;
}
