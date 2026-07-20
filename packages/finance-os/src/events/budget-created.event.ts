import { BudgetId } from '../budgeting/budget.js';

export interface BudgetCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly budgetId: BudgetId;
  readonly uniqueBudgetCode: string;
  readonly fiscalYear: number;
  readonly totalPlannedBudgetAmount: number;
  readonly currencyCode: string;
  readonly creatorOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
