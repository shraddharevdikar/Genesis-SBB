export interface DynamicPricingRecommendation {
  readonly roomCategoryIdString: string;
  readonly baseRackRateAmount: number;
  readonly recommendedMultiplierDecimal: number; // e.g. 1.15 (15% premium due to high demand)
  readonly recommendedOptimizedPriceAmount: number;
  readonly pricingRationaleReasoningText: string;
}

export interface RevenueOptimization {
  readonly optimizationId: string;
  readonly uniqueOptimizationCode: string; // e.g., "REV-OPT-2026-10-15"
  readonly associatedPropertyIdString: string;
  readonly optimizationTargetDate: Date;
  readonly recommendationsList: DynamicPricingRecommendation[];
  readonly dynamicPricingRuleActivatedFlag: boolean; // Autopilot vs copilot governance
  readonly managerSignOffStaffRoleIdString?: string;
  readonly calculatedAt: Date;
}
