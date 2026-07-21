export type PodVerificationMethod = 'DIGITAL_SIGNATURE' | 'PHOTO_CONFIRMATION' | 'ONE_TIME_PIN_SMS' | 'GEOLOCATION_LOCK' | 'PAPER_WAYBILL_STAMP';

export interface ProofOfDelivery {
  readonly podId: string;
  readonly uniquePodCode: string; // e.g. "POD-DLV-992144"
  readonly associatedDeliveryIdString: string; // Links to Delivery
  readonly verificationMethod: PodVerificationMethod;
  readonly recipientSignatoryNameString?: string;
  readonly recipientSignatureImageBase64?: string; // Digital signature
  readonly deliveryDropOffPhotoURIString?: string; // photo proof
  readonly signedGpsLatitudeDecimal?: number; // Spatial validation of signature coordinates
  readonly signedGpsLongitudeDecimal?: number;
  readonly deviceSignatureIdentifier?: string; // Mobile terminal UUID (OperationsOS)
  readonly signedTimestamp: Date;
}
