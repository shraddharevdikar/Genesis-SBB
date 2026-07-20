export interface MarketingOwner {
  readonly ownerId: string;
  readonly uniqueCampaignCode: string; // bound to campaign or program
  readonly accountableOperatorRoleId: string; // e.g. "ROLE-CMO", "ROLE-HEAD-OF-GROWTH"
  readonly managingAgencyCompanyName?: string; // external agency vendor name if outsourced
  readonly complianceOfficerRoleId: string; // e.g. "ROLE-LEGAL-COUNSEL"
  readonly lastCertifiedAt: Date;
}
