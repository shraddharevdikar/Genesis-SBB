export type InventoryItemHazardClass = 'NON_HAZARDOUS' | 'FLAMMABLE_LIQUID' | 'CORROSIVE' | 'TOXIC_SUBSTANCE' | 'EXPLOSIVE_GAS';

export interface PhysicalDimensions {
  readonly weightKgDecimal: number;
  readonly widthCmDecimal: number;
  readonly heightCmDecimal: number;
  readonly depthCmDecimal: number;
  readonly packagingVolumeCubicMetersDecimal: number;
}

export interface InventoryItem {
  readonly itemId: string;
  readonly uniqueItemSkuCode: string; // e.g. "SKU-PROD-A102"
  readonly globalUpcEanCodeString?: string; // Standard retail barcodes (RetailEcommerceOS)
  readonly itemDisplayNameString: string;
  readonly itemBriefDescriptionText: string;
  readonly baseProductCategoryCodeString: string; // Links to SalesOS/RetailOS category
  readonly standardCostAmount: number; // Anchor standard cost (FinanceOS accounting)
  readonly inventoryValuationMethod: 'FIFO' | 'LIFO' | 'AVERAGE_COST';
  readonly batchLotControlFlag: boolean; // For food/pharma expiry traceability
  readonly serializationRequiredFlag: boolean; // Individual unit serial codes
  readonly dimensions: PhysicalDimensions;
  readonly hazardClass: InventoryItemHazardClass;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
