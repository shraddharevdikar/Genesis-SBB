export interface DiscountPolicy {
  readonly policyId: string;
  readonly uniquePolicyCode: string; // e.g., "POL-DISC-NO-STACKING"
  readonly policyName: string;
  readonly maxCompoundedDiscountPercentageDecimal: number; // e.g. 0.40 (cannot exceed 40% discount in total)
  readonly allowStackingWithLoyaltyRedemptionFlag: boolean;
  readonly allowStackingWithSaleItemsFlag: boolean;
  readonly excludeSpecificBrandNamesList: string[];
  readonly excludeSpecificSkuCodesList: string[];
  readonly activeStatusFlag: boolean;
  readonly lastReviewedAt: Date;
}
