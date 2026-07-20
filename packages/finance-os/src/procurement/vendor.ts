export type VendorComplianceCode =
  | 'FULLY_APPROVED'
  | 'PROVISIONAL_TRIAL'
  | 'BLACKLISTED_BLOCKED'
  | 'PENDING_DOCUMENTATION';

export interface Vendor {
  readonly vendorId: string;
  readonly uniqueVendorCode: string; // e.g. "VND-AWS-001"
  readonly legalName: string;
  readonly taxRegistrationNumberString?: string;
  readonly primaryContactName: string;
  readonly primaryContactEmailString: string;
  readonly paymentTermsDaysCount: number; // e.g. Net 30, Net 45
  readonly standardCurrencyCode: string; // e.g. "USD", "CHF"
  readonly complianceStatus: VendorComplianceCode;
  readonly totalAnnualSpendToDateAmount: number;
  readonly ratingScoreNumeric: number; // e.g. 0 to 100 based on delivery SLA
  readonly onboardingDate: Date;
}
