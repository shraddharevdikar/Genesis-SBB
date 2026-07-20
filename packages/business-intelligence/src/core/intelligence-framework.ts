import { InsightId } from '../identity/insight-id.js';
import { RecommendationId } from '../identity/recommendation-id.js';
import { ForecastId } from '../identity/forecast-id.js';
import { IntelligenceContext } from './intelligence-context.js';
import { BusinessInsight, InsightCategoryCode } from '../insights/business-insight.js';
import { TrendAnalysis } from '../insights/trend-analysis.js';
import { AnomalyDetection } from '../insights/anomaly-detection.js';
import { BusinessForecast, ForecastCategoryCode } from '../forecasting/business-forecast.js';
import { ForecastHorizon } from '../forecasting/forecast-horizon.js';
import { BusinessRecommendation, RecommendationCategoryCode } from '../recommendations/business-recommendation.js';
import { RecommendationPriorityCode } from '../recommendations/recommendation-priority.js';
import { RecommendationImpact } from '../recommendations/recommendation-impact.js';

export interface IntelligenceFramework {
  /**
   * Explores and extracts descriptive pattern findings on an SBB resource.
   */
  generateInsight(
    uniqueInsightCode: string,
    category: InsightCategoryCode,
    displayName: string,
    summaryDescriptionText: string,
    affectedResourceURI: string,
    confidenceScoreRatio: number,
    context: IntelligenceContext
  ): Promise<BusinessInsight>;

  /**
   * Conducts structured historical growth analysis over targeted intervals.
   */
  analyzeTrend(
    uniqueInsightCode: string,
    displayName: string,
    summaryDescriptionText: string,
    affectedResourceURI: string,
    measuredPeriodDaysCount: number,
    historicalDataPointsCount: number,
    context: IntelligenceContext
  ): Promise<TrendAnalysis>;

  /**
   * Identifies sudden deviations or spikes compared against historical baselines.
   */
  detectAnomaly(
    uniqueInsightCode: string,
    displayName: string,
    summaryDescriptionText: string,
    affectedResourceURI: string,
    expectedMedianValue: number,
    observedActualValue: number,
    context: IntelligenceContext
  ): Promise<AnomalyDetection>;

  /**
   * Projects data trends forwards into a designated horizon range.
   */
  produceForecast(
    uniqueForecastCode: string,
    category: ForecastCategoryCode,
    displayName: string,
    horizon: ForecastHorizon,
    targetModelCode: string,
    context: IntelligenceContext
  ): Promise<BusinessForecast>;

  /**
   * Creates priority-coded strategic, operational, financial, or AI optimization suggestions.
   */
  createRecommendation(
    uniqueRecommendationCode: string,
    category: RecommendationCategoryCode,
    displayName: string,
    detailedDescriptionText: string,
    priority: RecommendationPriorityCode,
    expectedImpact: RecommendationImpact,
    sourceInsightIdStringList: string[],
    context: IntelligenceContext
  ): Promise<BusinessRecommendation>;

  /**
   * Sunsets or decommissions active analytical scopes or models.
   */
  retireIntelligence(
    intelligenceScopeId: string,
    context: IntelligenceContext
  ): Promise<void>;
}
