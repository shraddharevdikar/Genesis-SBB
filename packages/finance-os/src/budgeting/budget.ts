import { BudgetLifecycleState } from '../core/finance-lifecycle.js';
import { BudgetAllocation } from './budget-allocation.js';
import { BudgetRevision } from './budget-revision.js';

export interface BudgetId {
  readonly value: string;
}

export interface Budget {
  readonly budgetId: BudgetId;
  readonly uniqueBudgetCode: string; // e.g. "BGT-FY2026-GLOBAL"
  readonly displayName: string;
  readonly descriptionNotesText: string;
  readonly fiscalYear: number;
  readonly totalPlannedBudgetAmount: number;
  readonly totalAllocatedBudgetAmount: number;
  readonly totalActualSpentAmount: number;
  readonly totalRemainingAmount: number;
  readonly currencyCode: string; // e.g. "CHF"
  readonly allocationsList: BudgetAllocation[];
  readonly appliedRevisionsList: BudgetRevision[];
  readonly currentState: BudgetLifecycleState;
  readonly ownerOperatorRoleId: string; // e.g., CFO
  readonly lastReviewedAt?: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
