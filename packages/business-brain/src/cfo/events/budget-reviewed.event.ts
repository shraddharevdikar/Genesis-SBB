import { BudgetPlan } from '../budget/budget-plan.js';
import { FinancialRecommendation } from '../advisory/financial-recommendation.js';

export interface BudgetReviewedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly planId: string;
  readonly planSnapshot: BudgetPlan;
  readonly recommendation: FinancialRecommendation;
  readonly reviewerRole: string; // CFO
  readonly timestamp: Date;
}
