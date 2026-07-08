import { BudgetScope } from './ai-budget.js';

export interface BudgetAlert {
  readonly alertId: string;
  readonly budgetId: string;
  readonly scope: BudgetScope;
  readonly scopeId: string;
  readonly thresholdPercentTriggered: number;
  readonly limitUSD: number;
  readonly spentUSD: number;
  readonly triggeredAt: Date;
}
