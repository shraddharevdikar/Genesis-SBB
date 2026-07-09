export interface CustomerOrganization {
  readonly organizationId: string;
  readonly tenantId: string;
  readonly legalName: string;
  readonly tradeName?: string;
  readonly websiteUrl?: string;
  readonly primaryIndustry: string;
  readonly employeeCount: number;
  readonly annualRevenueUSD?: number;
  readonly taxId?: string;
}
