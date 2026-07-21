export interface BillableHours {
  readonly billableHoursId: string;
  readonly uniqueBillableHoursCode: string; // e.g. "BHR-2026-992144"
  readonly associatedWorklogIdString: string; // Links to Worklog
  readonly associatedClientIdString: string; // Links to Client
  readonly associatedProjectIdString: string; // Links to Project
  readonly hoursToInvoiceCountDecimal: number;
  readonly netContractedBillingRateAmount: number;
  readonly calculatedGrossInvoiceAmount: number; // hours * rate
  readonly writeDownDiscountAppliedAmountDecimal: number; // Partner write-downs before client sees bill
  readonly netInvoicedAmount: number; // gross - discounts
  readonly clientInvoiceIdReferenceString?: string; // Links to FinanceOS Invoice
  readonly billedFlag: boolean;
  readonly lastModifiedAt: Date;
}
