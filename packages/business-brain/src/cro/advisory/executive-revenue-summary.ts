import { RevenueHealth } from '../revenue/revenue-health.js';
import { SalesPipeline } from '../sales/sales-pipeline.js';
import { PricingStrategy } from '../pricing/pricing-strategy.js';
import {
  RevenueRecommendation,
  PricingRecommendation,
  PipelineRecommendation,
  ForecastSummary
} from './revenue-recommendation.js';

export interface ExecutiveRevenueSummary {
  readonly summaryId: string;
  readonly tenantId: string;
  readonly revenueHealthSummary: RevenueHealth;
  readonly salesPipelineSummary: SalesPipeline;
  readonly pricingStrategySummary: PricingStrategy;
  readonly revenueRecommendations: RevenueRecommendation[];
  readonly pricingRecommendations: PricingRecommendation[];
  readonly pipelineRecommendations: PipelineRecommendation[];
  readonly forecastSummaries: ForecastSummary[];
  readonly overallRevenuePostureStatus: 'OPTIMAL' | 'ACCEPTABLE' | 'RISKY' | 'CRITICAL';
  readonly generatedBy: string; // e.g. "CRO Brain Identifier"
  readonly compiledAt: Date;
}
