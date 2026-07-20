export type OptimizationStrategyCode =
  | 'CONSOLIDATE_SAAS_LICENSES'
  | 'NEGOTIATE_VENDOR_PAYMENT_TERMS'
  | 'REDUCE_UNDERUTILIZED_HOSTING_INFRASTRUCTURE'
  | 'REALLOCATE_UNUSED_SALARY_BUDGET'
  | 'TEMPORARY_FREEZE_DISCRETIONARY_TRAVEL';

export interface BudgetRecommendation {
  readonly recommendationId: string;
  readonly uniqueRecommendationCode: string; // e.g. "REC-BGT-2026-004"
  readonly strategyType: OptimizationStrategyCode;
  readonly targetAllocationIdString?: string;
  readonly recommendedActionSuggestedNotes: string;
  readonly estimatedCostReductionSavingsAmount: number;
  readonly confidenceScoreRatioDecimal: number; // 0.0 to 1.0 AI confidence
  readonly isAppliedFlag: boolean;
  readonly appliedByOperatorRoleId?: string;
  readonly appliedAt?: Date;
}
