import { MarketAnalysis } from '../market/market-analysis.js';
import { BrandHealth } from '../brand/brand-health.js';
import { PipelineHealth } from '../performance/pipeline-health.js';
import {
  MarketingRecommendation,
  BrandRecommendation,
  GrowthRecommendation,
  MarketOpportunitySummary
} from './marketing-recommendation.js';

export interface ExecutiveMarketingSummary {
  readonly summaryId: string;
  readonly tenantId: string;
  readonly marketAnalysisSummary: MarketAnalysis;
  readonly brandHealthSummary: BrandHealth;
  readonly pipelineHealthSummary: PipelineHealth;
  readonly marketingRecommendations: MarketingRecommendation[];
  readonly brandRecommendations: BrandRecommendation[];
  readonly growthRecommendations: GrowthRecommendation[];
  readonly opportunitySummaries: MarketOpportunitySummary[];
  readonly overallMarketingPostureStatus: 'OPTIMAL' | 'ACCEPTABLE' | 'RISKY' | 'CRITICAL';
  readonly generatedBy: string; // e.g., "CMO Brain Identifier"
  readonly compiledAt: Date;
}
