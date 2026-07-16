export type BusinessDomainTypeCode =
  | 'MARKETING_OS'
  | 'SALES_OS'
  | 'FINANCE_OS'
  | 'HR_OS'
  | 'LEGAL_OS'
  | 'HEALTHCARE_OS'
  | 'REAL_ESTATE_OS'
  | 'MANUFACTURING_OS';

export interface BusinessDomain {
  readonly domainCode: BusinessDomainTypeCode;
  readonly name: string;
  readonly descriptionText: string;
  readonly supportedCapabilitiesList: string[];
}
