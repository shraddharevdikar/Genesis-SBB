export interface HROwner {
  readonly ownerId: string;
  readonly uniqueOwnerCode: string; // e.g. "OWN-HRBP-CH-ENG"
  readonly operatorRoleIdString: string; // References core platform OperatorRole
  readonly ownerRoleType: 'CHRO' | 'HR_BUSINESS_PARTNER' | 'COMPENSATION_BENEFITS_DIRECTOR' | 'RECRUITING_LEAD' | 'COMPLIANCE_OFFICER';
  readonly assignedGeographicRegionCode: string; // e.g. "CH" (Switzerland)
  readonly assignedDepartmentIdString?: string; // e.g., Engineering
  readonly canOverrideStandardPoliciesFlag: boolean;
  readonly activeFlag: boolean;
}
