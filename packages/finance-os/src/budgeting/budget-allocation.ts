import { BudgetCategoryCode } from './budget-category.js';

export interface BudgetAllocation {
  readonly allocationId: string;
  readonly targetDepartmentIdString: string; // e.g. "DEP-MARKETING"
  readonly categoryCode: BudgetCategoryCode;
  readonly plannedAllocatedAmount: number;
  readonly accumulatedSpentAmount: number;
  readonly remainingCommittedAmount: number;
  readonly currencyCode: string; // e.g., "CHF"
  readonly isOverspentFlag: boolean;
  readonly pacingRatioDecimal: number; // actual spend / planned pacing
}
