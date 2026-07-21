import { PaymentGatewayProvider } from './payment-transaction.js';

export interface Refund {
  readonly refundId: string;
  readonly uniqueRefundCode: string; // e.g., "RFD-2026-CH-0042"
  readonly associatedPaymentTransactionIdString: string;
  readonly associatedReturnOrderIdString?: string; // empty if discretionary gesture
  readonly refundGatewayProvider: PaymentGatewayProvider;
  readonly externalGatewayRefundIdString?: string; // Stripe refund transaction ID
  readonly refundedAmount: number;
  readonly currencyCode: string;
  readonly refundReasonText: string; // e.g. "Item defective, returned" or "Customer satisfaction concession"
  readonly approvedByStaffRoleIdString: string; // supervisor signature
  readonly refundStatus: 'SUBMITTED_PENDING' | 'SETTLED_SUCCESS' | 'FAILED_REJECTED';
  readonly processedAt: Date;
}
