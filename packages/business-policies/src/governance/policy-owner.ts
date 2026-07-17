export interface PolicyOwner {
  readonly ownerId: string;
  readonly departmentOwnerIdString: string; // e.g. "DEP-FINANCE"
  readonly accountableOperatorRoleIdString: string; // e.g. "ROLE-CFO"
  readonly secondaryBackupOperatorRoleIdString?: string;
  readonly signatureVerificationHashString?: string;
}
