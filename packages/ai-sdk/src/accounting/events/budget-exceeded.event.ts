import { BudgetScope } from '../budgets/ai-budget.js';

export interface BudgetExceededEvent {
  readonly eventType: 'budget.exceeded';
  readonly timestamp: Date;
  readonly budgetId: string;
  readonly scope: BudgetScope;
  readonly scopeId: string;
  readonly limitUSD: number;
  readonly spentUSD: number;
}
