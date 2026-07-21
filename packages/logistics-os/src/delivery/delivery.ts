export type DeliveryStatusCode = 'STAGED_AT_DEPOT' | 'LOADED_ON_VEHICLE' | 'OUT_FOR_DELIVERY' | 'DELIVERY_COMPLETED' | 'DELIVERY_FAILED_ATTEMPT' | 'CANCELLED';

export interface Delivery {
  readonly deliveryId: string;
  readonly uniqueDeliveryCode: string; // e.g. "DLV-2026-992144"
  readonly associatedTransportOrderIdString: string; // Links to TransportOrder
  readonly recipientCustomerNameString: string;
  readonly recipientEmailAddressText?: string;
  readonly physicalDeliveryAddressString: string;
  readonly geoLatitudeDecimal?: number;
  readonly geoLongitudeDecimal?: number;
  readonly scheduledDeliveryDate: Date;
  readonly preferredDeliveryWindowStartText?: string; // e.g. "09:00"
  readonly preferredDeliveryWindowEndText?: string; // e.g. "12:00"
  readonly grossPackageWeightKgDecimal: number;
  readonly currentStatus: DeliveryStatusCode;
  readonly failureReasonNotesText?: string; // e.g. "No recipient available, gate locked"
  readonly actualDeliveryTimestamp?: Date;
  readonly lastModifiedAt: Date;
}
