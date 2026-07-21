export type SupplierTierCode = 'STRATEGIC_PREFERED' | 'APPROVED_TACTICAL' | 'TEMPORARY_PROBATION' | 'RESTRICTED_INACTIVE';

export interface SupplierRating {
  readonly onTimeDeliveryRatioDecimal: number; // e.g. 0.96 for 96%
  readonly qualityPassRatioDecimal: number; // e.g. 0.99 for 99%
  readonly pricingCompetitivenessScoreDecimal: number; // e.g. 0.85
  readonly lastAssessmentDate: Date;
}

export interface Supplier {
  readonly supplierId: string;
  readonly uniqueSupplierCode: string; // e.g. "SPL-ABC-9921"
  readonly legalCompanyNameString: string;
  readonly primaryContactNameString: string;
  readonly primaryContactEmailAddressText: string;
  readonly primaryContactPhoneNumberString?: string;
  readonly physicalBillingAddressString: string;
  readonly defaultSourcingLeadTimeDaysCount: number; // average days to fulfill an order
  readonly supplierTier: SupplierTierCode;
  readonly defaultSettlementTermsCodeString?: string; // Links to FinanceOS
  readonly performanceRating?: SupplierRating;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
