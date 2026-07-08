import { BudgetAllocation } from './budget-allocation.js';

export interface BudgetPlan {
  readonly planId: string;
  readonly tenantId: string;
  readonly fiscalPeriod: string; // e.g. "Q3-2026"
  readonly allocations: BudgetAllocation[];
  readonly totalBudgetUSD: number;
  readonly totalActualUSD: number;
  readonly totalVarianceUSD: number;
  readonly isApproved: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
