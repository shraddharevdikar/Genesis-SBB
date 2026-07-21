export enum PaymentGatewayProvider {
  STRIPE = 'STRIPE',
  ADYEN = 'ADYEN',
  PAYPAL = 'PAYPAL',
  APPLE_PAY = 'APPLE_PAY',
  STORE_CREDIT_INTERNAL = 'STORE_CREDIT_INTERNAL',
  CASH_REGISTER_PHYSICAL = 'CASH_REGISTER_PHYSICAL'
}

export interface PaymentTransaction {
  readonly transactionId: string;
  readonly uniqueTransactionCode: string; // e.g., "TXN-2026-CH-004241"
  readonly associatedSalesOrderIdString: string;
  readonly paymentGateway: PaymentGatewayProvider;
  readonly externalGatewayTransactionIdString?: string; // Stripe reference charge ID
  readonly authorizedAmount: number;
  readonly settledAmount: number;
  readonly currencyCode: string;
  readonly paymentMethodType: 'CREDIT_DEBIT_CARD' | 'DIGITAL_WALLET' | 'BANK_TRANSFER' | 'GIFT_CARD' | 'STORE_CREDIT' | 'CASH';
  readonly lastFourCardDigitsText?: string;
  readonly gatewayAuthorizationCode?: string;
  readonly transactionStatus: 'PENDING_AUTH' | 'AUTHORIZED' | 'SETTLED' | 'VOIDED' | 'DECLINED_FAILED';
  readonly gatewayErrorMessageText?: string;
  readonly transactedAt: Date;
}
