import { InvoiceId } from '../receivables/customer-invoice.js';

export interface PaymentReceivedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly receiptId: string;
  readonly associatedInvoiceId: InvoiceId;
  readonly customerAccountIdString: string;
  readonly totalAmountPaid: number;
  readonly currencyCode: string;
  readonly paymentMethod: string;
  readonly recordedByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
