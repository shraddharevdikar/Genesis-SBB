export interface PaymentAuthorization {
  readonly authorizationId: string;
  readonly uniqueAuthorizationCode: string; // e.g. "ATH-CC-2026-992144"
  readonly associatedReservationIdString: string;
  readonly paymentCardBrand: 'VISA' | 'MASTERCARD' | 'AMEX' | 'DISCOVER' | 'JCB' | 'OTHER';
  readonly lastFourDigitsString: string; // Tokenized compliance representation
  readonly requestedHoldAmountDecimal: number; // e.g., $500.00 to cover room + incidentals
  readonly gatewayAuthorizationReferenceString: string; // Links to FinanceOS secure vaults
  readonly currentStatus: 'ACTIVE_HOLD' | 'RELEASED' | 'SETTIED_CAPTURED' | 'EXPIRED';
  readonly authorizedAt: Date;
  readonly expiresAt: Date;
  readonly capturedAt?: Date;
}
