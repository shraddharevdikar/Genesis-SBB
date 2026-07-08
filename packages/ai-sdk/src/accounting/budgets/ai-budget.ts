export type BudgetScope = 'TENANT' | 'ORGANIZATION' | 'DEPARTMENT' | 'PROJECT';

export interface AIBudget {
  readonly budgetId: string;
  readonly scope: BudgetScope;
  readonly scopeId: string; // The tenantId, orgId, departmentId, or projectId
  readonly limitUSD: number;
  readonly spentUSD: number;
  readonly period: 'daily' | 'weekly' | 'monthly' | 'yearly';
  readonly startDate: Date;
  readonly endDate?: Date;
}
