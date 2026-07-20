export interface SalesOwner {
  readonly ownerId: string;
  readonly uniqueAccountOrOpportunityCode: string; // Bound target
  readonly accountableRepresentativeOperatorRoleId: string; // Account Executive or CS Representative
  readonly approvedTerritoryManagerOperatorRoleId: string; // District/Regional Director
  readonly legalComplianceOfficerOperatorRoleId: string; // Contract/Legal Reviewer
  readonly lastCertifiedAt: Date;
}
