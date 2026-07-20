import { InvoiceLifecycleState } from '../core/finance-lifecycle.js';

export interface CustomerInvoiceLine {
  readonly lineId: string;
  readonly productDescriptionText: string;
  readonly quantityNumeric: number;
  readonly unitPriceAmount: number;
  readonly totalLineAmount: number; // qty * price
}

export interface InvoiceId {
  readonly value: string;
}

export interface CustomerInvoice {
  readonly invoiceId: InvoiceId;
  readonly uniqueInvoiceCode: string; // e.g. "INV-CUST-2026-0421"
  readonly customerAccountIdString: string; // Associated customer
  readonly associatedOpportunityCodeString?: string; // Reference to Sales deal
  readonly lineItemsList: CustomerInvoiceLine[];
  readonly totalListAmount: number;
  readonly taxRatePercentageDecimal: number; // e.g. 0.081 for 8.1% Swiss VAT
  readonly totalTaxAmount: number;
  readonly totalNetBilledAmount: number; // list + tax
  readonly totalPaidAmount: number;
  readonly totalRemainingAmount: number;
  readonly currencyCode: string; // e.g., "CHF"
  readonly issueDate: Date;
  readonly dueDate: Date;
  readonly paymentTermsDescription: string; // e.g., "Net 30"
  readonly billingEmailString: string;
  readonly currentState: InvoiceLifecycleState;
  readonly billingOfficerOperatorRoleId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
