export interface CatalogId {
  readonly value: string;
}

export interface CatalogProduct {
  readonly productId: string;
  readonly uniqueSkuCode: string; // Stock Keeping Unit e.g., "SKU-APL-IPH15-BLK-256"
  readonly upcBarcodeText: string; // Universal Product Code e.g., "194253994241"
  readonly displayName: string;
  readonly briefDescriptionText: string;
  readonly primaryCategoryIdString: string;
  readonly brandNameString: string;
  readonly variantIdsList: string[];
  readonly searchKeywordsList: string[];
  readonly activeStatusFlag: boolean;
  readonly isDigitalGoodFlag: boolean;
  readonly createdAt: Date;
  readonly lastModifiedAt: Date;
}

export interface ProductCatalog {
  readonly catalogId: CatalogId;
  readonly uniqueCatalogCode: string; // e.g., "CTL-US-HOLIDAY-2026"
  readonly catalogTitle: string;
  readonly marketRegionCodeText: string; // e.g., "US_EAST", "CH_DE"
  readonly associatedProductsList: CatalogProduct[];
  readonly activeFromDate: Date;
  readonly activeToDate?: Date;
  readonly publishedStatus: 'DRAFT' | 'PREVIEW' | 'PUBLISHED_ACTIVE' | 'ARCHIVED';
  readonly lastModifiedAt: Date;
}
