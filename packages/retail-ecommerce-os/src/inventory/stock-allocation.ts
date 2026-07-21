import { InventoryAllocationState } from '../core/commerce-lifecycle.js';

export interface StockAllocation {
  readonly allocationId: string;
  readonly uniqueAllocationCode: string; // e.g. "ALC-ORD-9932-LINE-1"
  readonly associatedStockItemIdString: string;
  readonly associatedOrderIdString?: string; // Null if soft-reserved in cart
  readonly associatedCartSessionIdString?: string; // Null if hard order allocation
  readonly allocatedQuantity: number;
  readonly allocationState: InventoryAllocationState;
  readonly reservationExpiresAt?: Date; // For cart reservation timeouts e.g. 15 mins
  readonly allocatedAt: Date;
  readonly lastModifiedAt: Date;
}
