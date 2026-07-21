export interface VariantAttributeValue {
  readonly attributeName: string; // e.g., "Color", "Size", "Capacity"
  readonly attributeValue: string; // e.g., "Graphite Black", "XL", "256GB"
}

export interface ProductVariant {
  readonly variantId: string;
  readonly parentProductIdString: string;
  readonly uniqueSkuCode: string; // SKU specific to this variant
  readonly upcBarcodeText: string;
  readonly attributeValuesList: VariantAttributeValue[];
  readonly addedPriceWeightAmount: number; // e.g., XL adds +$5.00 to base product price
  readonly addedCostWeightAmount: number;
  readonly weightGramsCount: number; // For shipping weight calculations
  readonly dimensionsCubicCentimetersVolumeDecimal: number;
  readonly imageGalleryStorageURIsList: string[];
  readonly stockKeepingStatus: 'ACTIVE_STOCKABLE' | 'PRE_ORDER_ONLY' | 'BACK_ORDER_ONLY' | 'DISCONTINUED_NO_SALE';
  readonly lastModifiedAt: Date;
}
