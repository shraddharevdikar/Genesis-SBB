export type ReturnCarrierTypeCode = 'CUSTOMER_DROP_OFF' | 'COURIER_PICKUP' | 'POSTAL_PREPAID_LABEL' | 'CARRIER_LTL_SWAP';

export interface ReverseLogistics {
  readonly reverseLogisticsId: string;
  readonly uniqueReverseLogisticsCode: string; // e.g. "RLG-2026-992144"
  readonly associatedReturnOrderIdString: string; // Links to ReturnOrder
  readonly pickupAddressString: string;
  readonly destinationWarehouseIdString: string; // Return hub
  readonly carrierType: ReturnCarrierTypeCode;
  readonly prePaidWaybillReferenceString?: string;
  readonly trackingStatus: 'LABEL_CREATED' | 'PACKAGE_IN_TRANSIT' | 'ARRIVED_AT_RECEIVING_HUB' | 'COMPLETED_SORTED';
  readonly parcelTrackNotesText?: string;
  readonly actualReceivedDate?: Date;
  readonly lastModifiedAt: Date;
}
