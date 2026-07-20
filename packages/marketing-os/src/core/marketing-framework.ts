import { MarketingContext } from './marketing-context.js';
import { CampaignId, MarketingCampaign } from '../campaigns/marketing-campaign.js';
import { MarketingStrategy, MarketingStrategyTier } from '../strategy/marketing-strategy.js';
import { AudienceStrategy, AudienceClassificationCode } from '../strategy/audience-strategy.js';
import { CampaignObjective } from '../campaigns/campaign-objective.js';
import { CampaignBudget } from '../campaigns/campaign-budget.js';
import { CampaignTimeline } from '../campaigns/campaign-timeline.js';
import { MarketingKpis } from '../analytics/marketing-kpis.js';
import { OptimizationRecommendation } from '../ai/optimization-recommendation.js';

export interface MarketingFramework {
  /**
   * Plans a global, regional, or tactical marketing strategy defining general thresholds and total budget constraints.
   */
  planStrategy(
    uniqueStrategyCode: string,
    displayName: string,
    descriptionText: string,
    strategyTier: MarketingStrategyTier,
    fiscalYear: number,
    allocatedOverallBudgetAmount: number,
    currencyCode: string,
    targetCpaAmountLimit: number,
    targetRoasRatioLimit: number,
    context: MarketingContext
  ): Promise<MarketingStrategy>;

  /**
   * Identifies and configures an Ideal Customer Profile (ICP) or developer/executive cohort audience strategy.
   */
  defineAudience(
    audienceClassification: AudienceClassificationCode,
    geolocationsList: string[],
    primaryLanguageCodesList: string[],
    context: MarketingContext
  ): Promise<AudienceStrategy>;

  /**
   * Registers a brand-compliant marketing campaign with concrete objectives, spend limits, and durations.
   */
  createCampaign(
    uniqueCampaignCode: string,
    displayName: string,
    descriptionText: string,
    strategyCode: string,
    objective: CampaignObjective,
    budget: CampaignBudget,
    timeline: CampaignTimeline,
    context: MarketingContext
  ): Promise<MarketingCampaign>;

  /**
   * Validates brand policies and moves the campaign to ACTIVE state, initiating cross-channel traffic feeds.
   */
  launchCampaign(
    campaignId: CampaignId,
    activeChannelCodesList: string[],
    context: MarketingContext
  ): Promise<MarketingCampaign>;

  /**
   * Returns highly structured multi-tenant Performance Indicators (CAC, ROAS, MQL conversions) for active monitors.
   */
  monitorPerformance(
    campaignId: CampaignId,
    context: MarketingContext
  ): Promise<MarketingKpis>;

  /**
   * Reallocates budget or adapts bids based on autonomous AI optimizer agent recommendations.
   */
  optimizeCampaign(
    campaignId: CampaignId,
    recommendation: OptimizationRecommendation,
    context: MarketingContext
  ): Promise<MarketingCampaign>;

  /**
   * Sunset campaign executions and produce final closed metrics reporting aggregates.
   */
  closeCampaign(
    campaignId: CampaignId,
    context: MarketingContext
  ): Promise<void>;
}
