export interface Policy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly title: string; // e.g. "Data Retention Policy", "Information Security Policy"
  readonly purpose: string;
  readonly scopeOfEnforcement: string; // e.g., "ALL_EMPLOYEES"
  readonly policyText: string;
  readonly complianceOwnerRoleId: string; // references OrganizationalRole
  readonly isEnforced: boolean;
  readonly isComplianceMandatory: boolean;
  readonly lastApprovedAt: Date;
  readonly revisionNumber: number;
}
