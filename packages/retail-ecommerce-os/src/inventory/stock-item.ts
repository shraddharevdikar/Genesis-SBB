import { LocationId } from './inventory-location.js';

export interface StockItem {
  readonly stockItemId: string;
  readonly uniqueStockItemCode: string; // e.g. "STK-LOC-ZURICH-SKU-IPH15"
  readonly associatedLocationId: LocationId;
  readonly skuCodeString: string;
  
  // Inventory Levels
  readonly onHandQuantityCount: number; // Physical stock in building
  readonly softReservedInCartQuantityCount: number; // Items currently in customer carts
  readonly hardAllocatedOrderQuantityCount: number; // Purchased but not shipped
  readonly availableForSaleQuantityCount: number; // onHand - hardAllocated - safetyBuffer
  readonly safetyStockThresholdCount: number; // Reorder threshold
  readonly replenishmentTriggerPointCount: number; // Reorder point
  
  readonly unitCostCalculatedBasisAmount: number;
  readonly currencyCode: string;
  readonly lastCycleCountTimestamp: Date;
  readonly activeStatusFlag: boolean;
}
