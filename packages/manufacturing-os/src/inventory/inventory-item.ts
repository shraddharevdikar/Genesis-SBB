import { ProductId } from '../products/product.js';
import { WarehouseId } from './warehouse.js';

export interface InventoryItemPosition {
  readonly positionId: string;
  readonly associatedWarehouseId: WarehouseId;
  readonly associatedProductId: ProductId;
  readonly stockBinLabelText: string; // e.g. "ROW-04-SHELF-B-BIN-02"
  readonly onHandQuantity: number;
  readonly reservedForProductionQuantity: number;
  readonly availableQuantity: number;
  readonly safetyStockThresholdQuantity: number;
  readonly reorderTriggerPointQuantity: number;
  readonly averageUnitCostAmount: number; // cost calculation basis
  readonly currencyCode: string;
  readonly lastPhysicalCountAt: Date;
}

export interface InventoryItem {
  readonly inventoryItemId: string;
  readonly uniqueInventoryItemCode: string; // e.g. "INV-POS-X100-SHEET"
  readonly associatedProductId: ProductId;
  readonly positionsList: InventoryItemPosition[];
  readonly totalStockOnHandQuantity: number;
  readonly globalSafetyStockBufferQuantity: number;
  readonly activeFlag: boolean;
  readonly lastModifiedAt: Date;
}
