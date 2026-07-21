export interface DeliveryAttemptLog {
  readonly attemptIndex: number;
  readonly attemptTimestamp: Date;
  readonly wasSuccessfulFlag: boolean;
  readonly failureReasonDescription?: string; // e.g. "Customer not home, signature required"
}

export interface RetailDeliveryConfirmation {
  readonly confirmationId: string;
  readonly uniqueConfirmationCode: string; // e.g. "DLV-CONF-2026-CH-0042"
  readonly associatedShipmentIdString: string;
  readonly recipientSignedName?: string;
  readonly signatureImageURI?: string;
  readonly photoProofOfDeliveryURI?: string; // For unattended front porch deliveries
  readonly actualDeliveryTimestamp: Date;
  readonly attemptLogsList: DeliveryAttemptLog[];
  readonly deliveryInstructionsText?: string;
  readonly customerFeedbackRatingCount?: number; // 1 to 5 stars on delivery experience
  readonly verifiedAndClosedFlag: boolean;
}
