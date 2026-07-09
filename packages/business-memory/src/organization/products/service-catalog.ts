export interface ServiceCatalogItem {
  readonly serviceId: string;
  readonly name: string;
  readonly description: string;
  readonly ServiceLevelAgreementPercent: number; // e.g., 99.9
  readonly status: 'ACTIVE' | 'MAINTENANCE' | 'OUTAGE_RISK' | 'DECOMMISSIONED';
  readonly internalOwnerRoleId: string; // references OrganizationalRole
  readonly consumersCount: number; // estimated active users/departments utilizing service
}

export interface ServiceCatalog {
  readonly catalogId: string;
  readonly tenantId: string;
  readonly servicesList: ServiceCatalogItem[];
  readonly lastTestedAt: Date;
}
