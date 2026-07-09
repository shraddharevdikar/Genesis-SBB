import { ExecutiveBrain } from '../core/contracts/executive-brain.js';
import { ExecutiveContext } from '../core/contracts/executive-context.js';
import { RevenueHealth } from './revenue/revenue-health.js';
import { SalesPipeline } from './sales/sales-pipeline.js';
import { PricingStrategy } from './pricing/pricing-strategy.js';
import { RevenueForecast } from './revenue/revenue-forecast.js';
import { CustomerExpansionPlan } from './accounts/customer-expansion.js';
import { ExecutiveRevenueSummary } from './advisory/executive-revenue-summary.js';

export interface CROBrain extends ExecutiveBrain {
  /**
   * Assesses the overall revenue health of the tenant, including ARR, NRR, GRR, and churn rates.
   */
  assessRevenueHealth(context: ExecutiveContext): Promise<RevenueHealth>;

  /**
   * Evaluates the pipeline stages, weighted and total values, stage count, and velocity.
   */
  evaluatePipelineQuality(context: ExecutiveContext): Promise<SalesPipeline>;

  /**
   * Reviews the pricing models, tiers, elasticity indicators, and competitive positioning.
   */
  reviewPricingStrategy(context: ExecutiveContext, strategy: PricingStrategy): Promise<PricingStrategy>;

  /**
   * Assesses quarterly/annual revenue forecasts under conservative, expected, and optimistic scenarios.
   */
  assessForecasting(context: ExecutiveContext): Promise<RevenueForecast>;

  /**
   * Reviews upsell, cross-sell, and general account expansion planning initiatives.
   */
  reviewCustomerExpansion(context: ExecutiveContext, plan: CustomerExpansionPlan): Promise<CustomerExpansionPlan>;

  /**
   * Produces an executive-level summary of revenue postures, forecasts, pipeline stages, and strategic advisories.
   */
  produceExecutiveRevenueSummary(
    context: ExecutiveContext,
    revenueHealth: RevenueHealth,
    salesPipeline: SalesPipeline
  ): Promise<ExecutiveRevenueSummary>;
}
