import { InvoiceId } from './customer-invoice.js';

export type PaymentMethodCode =
  | 'BANK_TRANSFER_IBAN'
  | 'CREDIT_CARD_STRIPE'
  | 'DIRECT_DEBIT'
  | 'PHYSICAL_CHEQUE'
  | 'PAYPAL';

export interface PaymentReceipt {
  readonly receiptId: string;
  readonly uniqueReceiptCode: string; // e.g. "RCT-CUST-2026-0042"
  readonly associatedInvoiceId: InvoiceId;
  readonly customerAccountIdString: string;
  readonly paymentDate: Date;
  readonly paymentMethod: PaymentMethodCode;
  readonly totalAmountPaid: number;
  readonly currencyCode: string; // e.g. "CHF"
  readonly bankReferenceTransactionIdentifierCode: string; // IBAN txn reference
  readonly isClearedFlag: boolean; // Bank clearing check
  readonly recordedByOperatorRoleId: string;
  readonly createdAt: Date;
}
