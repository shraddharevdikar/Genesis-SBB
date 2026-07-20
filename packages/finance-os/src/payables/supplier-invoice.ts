import { InvoiceLifecycleState } from '../core/finance-lifecycle.js';

export interface SupplierInvoiceLine {
  readonly lineId: string;
  readonly descriptionText: string;
  readonly amount: number;
}

export interface SupplierInvoice {
  readonly supplierInvoiceId: string;
  readonly uniqueInvoiceCode: string; // e.g. "INV-SUPP-AWS-0012"
  readonly vendorIdString: string; // reference to Vendor
  readonly associatedPoCodeString?: string; // reference to PO
  readonly lineItemsList: SupplierInvoiceLine[];
  readonly totalBilledAmount: number;
  readonly totalPaidAmount: number;
  readonly totalRemainingAmount: number;
  readonly currencyCode: string; // e.g. "USD", "CHF"
  readonly invoiceDate: Date;
  readonly dueDate: Date;
  readonly bankIbanTransferDetailsText: string;
  readonly currentState: InvoiceLifecycleState;
  readonly recordedByOperatorRoleId: string;
  readonly createdAt: Date;
}
