export interface InventoryBalance {
  readonly balanceId: string;
  readonly uniqueBalanceCode: string; // e.g. "BAL-ZUR-SKU-PROD-A102"
  readonly associatedWarehouseIdString: string; // Links to Warehouse
  readonly associatedSkuCodeString: string; // Links to InventoryItem
  readonly physicalOnHandCount: number; // total units physically in building
  readonly allocatedQuantityCount: number; // committed to active sales orders (SalesOS)
  readonly backorderedQuantityCount: number; // shorted outstanding demand
  readonly availableToPromiseCount: number; // onHand - allocated
  readonly safetyStockThresholdCount: number; // minimum buffer limit before triggering alert
  readonly reorderPointThresholdCount: number; // auto purchase-order trigger count
  readonly standardEconomicOrderQuantityCount: number; // EOQ optimized batch size
  readonly averageInventoryAgeDaysCount?: number;
  readonly lastCycleCountDate?: Date;
  readonly lastModifiedAt: Date;
}
