import { ExecutiveBrain } from '../core/contracts/executive-brain.js';
import { ExecutiveContext } from '../core/contracts/executive-context.js';
import { MarketAnalysis } from './market/market-analysis.js';
import { CompetitiveAnalysis } from './market/competitive-analysis.js';
import { BrandHealth } from './brand/brand-health.js';
import { GrowthStrategy } from './growth/growth-strategy.js';
import { MarketingInvestment } from './investment/marketing-investment.js';
import { MarketingROI } from './investment/marketing-roi.js';
import { ExecutiveMarketingSummary } from './advisory/executive-marketing-summary.js';

export interface CMOBrain extends ExecutiveBrain {
  /**
   * Conducts an in-depth target market analysis across size, growth rate, and key emerging trends.
   */
  analyzeMarket(context: ExecutiveContext, marketName: string): Promise<MarketAnalysis>;

  /**
   * Reviews and evaluates major competitor positions, strengths, vulnerabilities, and potential threats.
   */
  evaluateCompetitors(context: ExecutiveContext, targetProductCategory: string): Promise<CompetitiveAnalysis>;

  /**
   * Assesses current brand metrics covering equity, customer trust indexes, and sentiment ratios.
   */
  assessBrandHealth(context: ExecutiveContext): Promise<BrandHealth>;

  /**
   * Formulates and recommends customer-centric scaling, launch, or expansion pathways.
   */
  recommendGrowthStrategies(context: ExecutiveContext, strategy: GrowthStrategy): Promise<GrowthStrategy>;

  /**
   * Optimizes budget placements, tracks channel CAC thresholds, and computes ROI expectation targets.
   */
  optimizeMarketingInvestments(
    context: ExecutiveContext,
    investment: MarketingInvestment
  ): Promise<MarketingROI>;

  /**
   * Compiles an executive-level summary of active markets, brand standings, pipelines, and tactical advisories.
   */
  produceExecutiveMarketingSummary(
    context: ExecutiveContext,
    marketAnalysis: MarketAnalysis,
    brandHealth: BrandHealth
  ): Promise<ExecutiveMarketingSummary>;
}
