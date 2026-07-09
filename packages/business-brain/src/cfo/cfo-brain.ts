import { ExecutiveBrain } from '../core/contracts/executive-brain.js';
import { ExecutiveContext } from '../core/contracts/executive-context.js';
import { FinancialHealth } from './financial-health/financial-health.js';
import { InvestmentOpportunity } from './investment/investment-opportunity.js';
import { ROIAnalysis } from './investment/roi-analysis.js';
import { PaybackAnalysis } from './investment/payback-analysis.js';
import { BudgetPlan } from './budget/budget-plan.js';
import { CapitalAllocation } from './investment/capital-allocation.js';
import { ExecutiveFinancialSummary } from './advisory/executive-financial-summary.js';
import {
  BudgetRecommendation,
  InvestmentRecommendation,
  FinancialRiskSummary
} from './advisory/financial-recommendation.js';
import { FinancialPolicy } from './governance/financial-policy.js';

export interface CFOBrain extends ExecutiveBrain {
  /**
   * Assesses corporate financial health including liquidity, profitability, runway, and burn rate.
   */
  assessFinancialHealth(context: ExecutiveContext): Promise<FinancialHealth>;

  /**
   * Reviews proposed investment opportunities against strategic alignment and risk limits.
   */
  reviewInvestment(context: ExecutiveContext, opportunity: InvestmentOpportunity): Promise<InvestmentRecommendation>;

  /**
   * Analyzes Return on Investment (ROI) and break-even paybacks for a given opportunity.
   */
  analyzeRoi(context: ExecutiveContext, opportunity: InvestmentOpportunity): Promise<{ roi: ROIAnalysis; payback: PaybackAnalysis }>;

  /**
   * Reviews proposed budget plans, calculating departmental allocations and variance reports.
   */
  reviewBudget(context: ExecutiveContext, budgetPlan: BudgetPlan): Promise<BudgetRecommendation>;

  /**
   * Assesses external and internal financial risks, outlining mitigation procedures.
   */
  assessFinancialRisks(context: ExecutiveContext): Promise<FinancialRiskSummary>;

  /**
   * Recommends capital allocation for priority corporate proposals under the current financial policies.
   */
  recommendCapitalAllocation(
    context: ExecutiveContext,
    opportunities: InvestmentOpportunity[],
    policy: FinancialPolicy
  ): Promise<CapitalAllocation[]>;

  /**
   * Produces a unified, high-level financial summary and strategic advice report for the CEO and Board.
   */
  produceExecutiveFinancialSummary(context: ExecutiveContext, health: FinancialHealth): Promise<ExecutiveFinancialSummary>;
}
