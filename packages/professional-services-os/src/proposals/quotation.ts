export interface QuoteLineItem {
  readonly lineSequenceIndex: number;
  readonly roleCategoryCodeString: string; // e.g. "SEN-CON"
  readonly estimatedBillableHoursCount: number;
  readonly standardHourlyRateAmount: number;
  readonly discountedHourlyRateAmount: number;
  readonly subtotalCostAmount: number;
}

export interface Quotation {
  readonly quoteId: string;
  readonly uniqueQuoteCode: string; // e.g., "QTE-2026-CLOUD-ACME"
  readonly associatedProposalIdString: string; // Links to Proposal
  readonly quotationDescriptionString: string;
  readonly quoteLinesList: QuoteLineItem[];
  readonly totalHoursAllocatedCount: number;
  readonly grossEstimatedValueAmount: number;
  readonly overallDiscountPercentageDecimal: number; // e.g. 0.05 for 5% discount
  readonly netQuotedValueAmount: number;
  readonly validUntilDate: Date;
  readonly quotationApprovedFlag: boolean;
  readonly lastModifiedAt: Date;
}
