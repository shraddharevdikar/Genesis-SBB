import { ProductId } from '../products/product.js';

export interface ShipmentLineItem {
  readonly lineItemId: string;
  readonly targetProductId: ProductId;
  readonly quantityShipped: number;
  readonly batchLotCodeUsedString?: string;
  readonly unitCostCalculatedBasisAmount: number;
}

export interface Shipment {
  readonly shipmentId: string;
  readonly uniqueShipmentCode: string; // e.g. "SHP-2026-CH-9442"
  readonly associatedSalesOrderIdString?: string; // Links to SalesOS
  readonly shipmentLinesList: ShipmentLineItem[];
  readonly senderWarehouseIdString: string; // Links to Warehouse
  readonly destinationAddressString: string;
  readonly shippingCarrierName: string; // e.g. "DHL" or "SBB Cargo"
  readonly carrierTrackingNumberString?: string;
  readonly freightClassCodeText?: string;
  readonly estimatedWeightKilogramsDecimal: number;
  readonly cargoTemperatureCelsius?: number; // for cold-chain compliance tracking
  readonly status: 'PREPARING' | 'STAGED_FOR_LOADING' | 'IN_TRANSIT' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'RETURNED_REFUSED';
  readonly estimatedDeliveryDate: Date;
  readonly shippedAt?: Date;
  readonly deliveredAt?: Date;
}
