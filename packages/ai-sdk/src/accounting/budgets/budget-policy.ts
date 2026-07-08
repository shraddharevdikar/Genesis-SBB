import { BudgetScope } from './ai-budget.js';

export interface BudgetPolicy {
  readonly policyId: string;
  readonly scope: BudgetScope;
  readonly limitUSD: number;
  readonly alertThresholdsPercent: number[]; // e.g. [50, 80, 90, 100]
  readonly resetPeriod: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'none';
  readonly autoLockOnExceeded: boolean;
}
