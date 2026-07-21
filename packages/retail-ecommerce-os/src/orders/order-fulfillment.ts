import { FulfillmentStatus } from '../core/commerce-lifecycle.js';

export interface FulfillmentItemAllocation {
  readonly lineItemIdString: string;
  readonly skuCodeString: string;
  readonly allocatedQuantity: number;
}

export interface OrderFulfillment {
  readonly fulfillmentId: string;
  readonly uniqueFulfillmentCode: string; // e.g., "FUL-2026-NY-9922"
  readonly associatedOrderIdString: string;
  readonly sourceInventoryLocationIdString: string; // Warehouses, Retail Store, or FC
  readonly allocatedItemsList: FulfillmentItemAllocation[];
  readonly fulfillmentStatus: FulfillmentStatus;
  readonly shippingCarrierName?: string; // e.g., "FedEx", "UPS"
  readonly carrierTrackingNumber?: string;
  readonly packagingType?: string; // e.g., "BOX-MEDIUM"
  readonly labelStorageURI?: string; // PDF of shipping/packing slip
  readonly actualWeightKilogramsDecimal?: number;
  readonly estimatedDeliveryDate?: Date;
  readonly shippedAt?: Date;
  readonly completedAt?: Date;
}
