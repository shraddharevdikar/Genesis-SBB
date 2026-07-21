export interface Promotion {
  readonly promotionId: string;
  readonly uniquePromoCode: string; // e.g., "PROMO-BLACKFRIDAY-2026"
  readonly displayMarketingTitle: string;
  readonly couponCodeString?: string; // e.g., "BF2026" (nullable if automatic promotion)
  readonly requiresCouponInputFlag: boolean;
  readonly minSubtotalRequiredAmount: number;
  readonly discountValueDecimal: number; // e.g. 0.20 (20%) or 15.00 ($15.00)
  readonly discountCalculationMethod: 'PERCENTAGE_OFF' | 'FIXED_AMOUNT_OFF' | 'BUY_X_GET_Y_FREE' | 'FREE_SHIPPING';
  readonly buyXMinQuantity?: number;
  readonly getYFreeQuantity?: number;
  readonly getYSkuCode?: string;
  readonly maxUsageLimitPerCustomerCount: number;
  readonly totalGlobalUsageCapCount: number;
  readonly activeFromDate: Date;
  readonly activeToDate: Date;
  readonly currentUsageCount: number;
  readonly activeFlag: boolean;
}
