export type BudgetAllocationMethodCode =
  | 'STRICT_FIXED'
  | 'DYNAMIC_REALLOCATING_AI'
  | 'PERFORMANCE_TIERED';

export interface CampaignBudget {
  readonly budgetId: string;
  readonly totalAllocatedBudgetAmount: number;
  readonly dailySpendLimitAmount: number;
  readonly currencyCode: string; // e.g. "CHF"
  readonly allocationMethod: BudgetAllocationMethodCode;
  readonly accumulatedActualSpendAmount: number;
  readonly remainingBudgetAmount: number;
  readonly isOverBudgetFlag: boolean;
}
