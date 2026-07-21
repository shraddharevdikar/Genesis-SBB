export type BillingTypeCode = 'TIME_AND_MATERIALS_ACCUMULATION' | 'FIXED_PRICE_MILESTONE_TRIGGER' | 'MONTHLY_RETAINER_PRE_PAY' | 'EXPENSE_REIMBURSEMENT_PASS_THROUGH';

export interface InvoiceRequestLineItem {
  readonly lineSequenceIndex: number;
  readonly billingDescriptionText: string; // e.g. "Lead Solution Architect hours (Oct 1 - Oct 15)"
  readonly lineAmount: number;
  readonly associatedTimeEntryReferenceString?: string; // links to BillableHours
  readonly associatedExpenseEntryReferenceString?: string; // links to ExpenseEntry
}

export interface InvoiceRequest {
  readonly invoiceRequestId: string;
  readonly uniqueInvoiceRequestCode: string; // e.g. "INV-REQ-2026-00424"
  readonly associatedEngagementIdString: string; // Links to Engagement
  readonly associatedClientIdString: string; // Links to Client
  readonly billingType: BillingTypeCode;
  readonly lineItemsList: InvoiceRequestLineItem[];
  readonly totalNetBilledAmount: number;
  readonly totalTaxBilledAmount: number;
  readonly totalGrossBilledAmount: number;
  readonly generatedByStaffRoleIdString: string; // Project Manager or billing specialist (HROS)
  readonly approvedByPartnerStaffRoleIdString?: string; // High threshold Partner release (FinanceOS audit)
  readonly clientInvoiceIdReferenceString?: string; // Sourced to official FinanceOS Client Invoice record
  readonly requestStatus: 'DRAFT_PENDING_REVIEW' | 'PARTNER_APPROVED' | 'INVOICED_BY_FINANCE' | 'REJECTED_RE_RUN';
  readonly requestedAtTimestamp: Date;
  readonly lastModifiedAt: Date;
}
