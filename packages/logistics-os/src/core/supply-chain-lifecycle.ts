export type SupplyChainStepCode =
  | 'PROCUREMENT_DRAFT'
  | 'PROCUREMENT_APPROVED'
  | 'PURCHASE_ORDER_SENT'
  | 'SUPPLIER_DISPATCHED'
  | 'PORT_OF_ENTRY_CUSTOMS'
  | 'WAREHOUSE_RECEIVED_PENDING'
  | 'PUT_AWAY_COMPLETED'
  | 'STOCK_ALLOCATED'
  | 'PICK_PACK_PROCESSING'
  | 'SHIPMENT_DISPATCHED'
  | 'IN_TRANSIT_LINEHAUL'
  | 'OUT_FOR_LAST_MILE'
  | 'DELIVERED_POD_SIGNED'
  | 'RETURNED_REVERSE_LOGISTICS'
  | 'EXCLUDED_DAMAGED';

export interface SupplyChainTransition {
  readonly transitionId: string;
  readonly uniqueTransitionCode: string;
  readonly associatedPurchaseOrderIdString?: string;
  readonly associatedShipmentIdString?: string;
  readonly associatedDeliveryIdString?: string;
  readonly previousStep: SupplyChainStepCode;
  readonly targetStep: SupplyChainStepCode;
  readonly transitionTriggeredByOperatorId: string;
  readonly transitionNotesText?: string;
  readonly transitionTimestamp: Date;
}
