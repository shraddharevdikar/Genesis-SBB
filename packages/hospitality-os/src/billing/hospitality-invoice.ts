export interface TaxBreakdownRow {
  readonly taxCategoryName: string; // e.g. "VAT 7%", "City Luxury Tax 3%"
  readonly applicableRatePercentageDecimal: number;
  readonly computedTaxAmount: number;
}

export interface HospitalityInvoice {
  readonly invoiceId: string;
  readonly uniqueInvoiceCode: string; // e.g. "INV-ZUR-2026-10492"
  readonly associatedFolioIdString: string;
  readonly billingGuestNameString: string;
  readonly billingAddressString?: string;
  readonly taxIdentificationReference?: string; // For corporate / VAT business expense compliance
  readonly issueDate: Date;
  readonly baseSubtotalAmount: number;
  readonly discountTotalAmount: number;
  readonly taxesBreakdownList: TaxBreakdownRow[];
  readonly grossGrandTotalAmount: number;
  readonly paymentMethodUsedCode: 'CREDIT_CARD' | 'CASH' | 'BANK_TRANSFER' | 'POINTS_REDEMPTION' | 'COMPANY_DIRECT_BILL';
  readonly secureVerificationHashString: string; // Cryptographic audit trail for financial licensing
  readonly invoicePdfURIString?: string;
}
