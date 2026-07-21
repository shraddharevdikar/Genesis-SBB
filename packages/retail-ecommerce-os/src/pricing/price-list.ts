export interface SkuPrice {
  readonly skuCode: string;
  readonly baseRetailPriceAmount: number;
  readonly msrpRecommendedPriceAmount?: number;
  readonly minimumAdvertisedPriceMAPAmount?: number;
  readonly costOfGoodsSoldCOGSAmount: number;
}

export interface PriceList {
  readonly priceListId: string;
  readonly uniquePriceListCode: string; // e.g., "PRC-US-EAST-RETAIL"
  readonly priceListTitle: string;
  readonly currencyCode: string; // e.g., "USD", "CHF"
  readonly targetChannelSourceList: string[]; // e.g. ["ONLINE_STOREFRONT", "POINT_OF_SALE_STORE"]
  readonly skuPricesList: SkuPrice[];
  readonly activeFromDate: Date;
  readonly activeToDate?: Date;
  readonly isOverrideMasterFlag: boolean; // if true, overrides the default global catalog price
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
