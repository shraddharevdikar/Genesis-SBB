export type TransportOrderPriority = 'CRITICAL_SAME_DAY' | 'EXPEDITED_NEXT_DAY' | 'STANDARD_DELIVERY' | 'ECONOMY_SAVER';

export interface TransportOrder {
  readonly transportOrderId: string;
  readonly uniqueTransportOrderCode: string; // e.g. "TPO-2026-992144"
  readonly associatedSalesOrderIdString?: string; // Links to SalesOS customer order
  readonly associatedPurchaseOrderIdString?: string; // Links to Procurement PO
  readonly pickupAddressString: string;
  readonly deliveryAddressString: string;
  readonly grossWeightKgDecimal: number;
  readonly cubicVolumeMetersDecimal: number;
  readonly priority: TransportOrderPriority;
  readonly specialHandlingInstructionsText?: string; // e.g. "FRAGILE_GLASS", "KEEP_COLD"
  readonly carrierContractIdString?: string; // Links to LegalOS/OperationsOS Carrier
  readonly targetPickupDeadline: Date;
  readonly targetDeliveryDeadline: Date;
  readonly currentStatus: 'PENDING_ASSIGNMENT' | 'ROUTED_ASSIGNED' | 'DISPATCHED' | 'IN_TRANSIT' | 'ARRIVED_DELIVERED' | 'FAILED_REJECTED';
  readonly lastModifiedAt: Date;
}
