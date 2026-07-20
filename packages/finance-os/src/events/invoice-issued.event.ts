import { InvoiceId } from '../receivables/customer-invoice.js';

export interface InvoiceIssuedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly invoiceId: InvoiceId;
  readonly uniqueInvoiceCode: string;
  readonly customerAccountIdString: string;
  readonly totalNetBilledAmount: number;
  readonly currencyCode: string;
  readonly dueDate: Date;
  readonly billingOfficerOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
