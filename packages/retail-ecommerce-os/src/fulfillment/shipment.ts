export interface ShipmentTrackingCheckpoint {
  readonly checkpointId: string;
  readonly checkpointTimestamp: Date;
  readonly locationText: string; // e.g. "Distribution Facility, Newark NJ"
  readonly activityStatusDescription: string; // e.g. "Arrived at sorting hub" or "Out for delivery"
}

export interface CommercialShipment {
  readonly shipmentId: string;
  readonly uniqueShipmentCode: string; // e.g. "SHP-2026-CH-04221"
  readonly associatedFulfillmentIdString: string; // Links to OrderFulfillment
  readonly parcelCount: number;
  readonly packageType: 'STANDARD_BOX' | 'BUBBLE_MAILER' | 'OVERSIZED_CRATE' | 'PALLET';
  readonly grossWeightGrams: number;
  readonly dimensionalHeightCentimeters: number;
  readonly dimensionalWidthCentimeters: number;
  readonly dimensionalLengthCentimeters: number;
  readonly shippingCarrierName: string; // e.g. "FedEx", "DHL", "SwissPost"
  readonly carrierServiceTierString: string; // e.g. "GROUND", "EXPRESS_OVERNIGHT"
  readonly trackingNumberString: string;
  readonly trackingCheckpointsList: ShipmentTrackingCheckpoint[];
  readonly actualShippingCostChargedAmount: number;
  readonly currencyCode: string;
  readonly actualShippedAt?: Date;
  readonly actualDeliveredAt?: Date;
}
