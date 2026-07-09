export interface ProductAdoption {
  readonly adoptionId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly productId: string; // references internal ProductCatalogItem
  readonly licensesPurchased: number;
  readonly licensesActive: number;
  readonly adoptionRatePercent: number; // e.g. (licensesActive/licensesPurchased)*100
  readonly primaryUsedFeatures: string[];
  readonly lastActivityAt: Date;
  readonly monthlyActiveUsers: number;
}
