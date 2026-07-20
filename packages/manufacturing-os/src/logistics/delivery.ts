export interface DeliveryConfirmation {
  readonly confirmationId: string;
  readonly uniqueConfirmationCode: string; // e.g. "DLV-CONF-2026-CH-9442"
  readonly associatedShipmentIdString: string;
  readonly recipientRegisteredName: string;
  readonly receivedStatus: 'FULLY_ACCEPTED_GOOD_CONDITION' | 'PARTIALLY_ACCEPTED_WITH_DEFECTS' | 'REJECTED_ENTIRE_CARGO';
  readonly recipientDefectNotesText?: string; // Reason if rejected/partial
  readonly actualDeliveryTimestamp: Date;
  readonly digitalSignatureDocURI: string; // Sign-off image or certificate link
  readonly verifiedAndReleasedFlag: boolean;
}
