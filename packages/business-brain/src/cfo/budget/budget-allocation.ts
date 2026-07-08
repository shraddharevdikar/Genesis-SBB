import { SpendingPriority } from './spending-priority.js';

export interface BudgetAllocation {
  readonly allocationId: string;
  readonly department: string; // e.g. 'ENGINEERING', 'MARKETING'
  readonly owner: string; // e.g. 'CTO', 'CMO'
  readonly priority: SpendingPriority;
  readonly budgetUSD: number;
  readonly actualUSD: number;
  readonly varianceUSD: number; // budgetUSD - actualUSD
  readonly category: string; // e.g. 'INFRASTRUCTURE', 'PERFORMANCE_MARKETING'
}
