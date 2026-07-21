import { InvoiceRequest } from '../billing/invoice-request.js';
import { ServicesContext } from '../core/services-context.js';

export interface InvoiceRequestedEvent {
  readonly eventId: string;
  readonly eventName: 'INVOICE_REQUESTED';
  readonly payload: {
    readonly invoiceRequestRecord: InvoiceRequest;
    readonly totalNetBilledAmountDecimal: number;
    readonly standardPaymentTermsCodeString: string;
  };
  readonly context: ServicesContext;
}
