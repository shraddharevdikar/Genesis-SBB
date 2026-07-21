export interface RecommendedItem {
  readonly skuCodeString: string;
  readonly scoreDecimal: number; // match confidence score e.g., 0.95
  readonly recommendationType: 'CROSS_SELL' | 'UP_SELL' | 'FREQUENTLY_BOUGHT_TOGETHER' | 'PERSONALISED_HISTORY';
  readonly discountIncentivePercentageDecimal?: number; // e.g. offer 10% off if bought together
}

export interface RecommendationList {
  readonly listId: string;
  readonly uniqueListCode: string; // e.g., "REC-CUST-9923"
  readonly associatedCustomerIdString?: string; // Null if anonymous session recommendations
  readonly sourceContextSkuCodeString?: string; // Current SKU page being viewed
  readonly recommendedItemsList: RecommendedItem[];
  readonly rationalBasisText: string;
  readonly calculatedAt: Date;
}
