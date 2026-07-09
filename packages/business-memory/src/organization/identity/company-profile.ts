export interface CompanyProfile {
  readonly profileId: string;
  readonly tenantId: string;
  readonly legalName: string;
  readonly tradeName?: string;
  readonly industrySector: string;
  readonly foundingDate: Date;
  readonly headquartersLocation: string;
  readonly purposeDescription: string;
}
