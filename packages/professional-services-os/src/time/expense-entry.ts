export type ExpenseCategoryCode = 'FLIGHTS_AIRFARE' | 'HOTEL_LODGING' | 'MEALS_REPRESENTATION' | 'GROUND_TRANSPORTATION' | 'SOFTWARE_LICENSES_PASSTHROUGH';

export type ExpenseReimbursementStatusCode = 'DRAFT' | 'SUBMITTED' | 'APPROVED_PENDING_PAYMENT' | 'REIMBURSED_PAID' | 'REJECTED';

export interface ExpenseEntry {
  readonly expenseEntryId: string;
  readonly uniqueExpenseEntryCode: string; // e.g. "EXP-2026-CON1-99214"
  readonly associatedConsultantIdString: string; // Links to Consultant
  readonly associatedProjectIdString?: string; // Null if internal corporate expense
  readonly expenseCategory: ExpenseCategoryCode;
  readonly incurredDate: Date;
  readonly amountIncurredInOriginalCurrency: number;
  readonly originalCurrencyCodeText: string; // e.g. "EUR", "CHF"
  readonly convertedCorporateAmount: number; // Linked with FinanceOS exchange engine
  readonly receiptImageUriString?: string; // Audit trail (FinanceOS)
  readonly clientBillableFlag: boolean; // True if pass-through billing is contracted in SOW
  readonly clientBillingMarkupPercentageDecimal?: number; // e.g. 0.05 for 5% markup
  readonly clientInvoiceIdReferenceString?: string;
  readonly reimbursementStatus: ExpenseReimbursementStatusCode;
  readonly approvedByStaffRoleIdString?: string; // Project Manager or HR Lead (HROS)
  readonly createdTimestamp: Date;
}
