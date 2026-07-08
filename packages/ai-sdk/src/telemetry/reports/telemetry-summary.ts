import { ProviderPerformance } from '../analytics/provider-performance.js';
import { ModelPerformance } from '../analytics/model-performance.js';
import { PromptPerformance } from '../analytics/prompt-performance.js';

export interface CapabilityPerformanceSummary {
  readonly capability: string;
  readonly averageLatencyMs: number;
  readonly totalRequests: number;
  readonly successRate: number;
  readonly totalCostUSD: number;
}

export interface TelemetrySummary {
  readonly tenantId: string;
  readonly periodStart: Date;
  readonly periodEnd: Date;
  readonly totalRequests: number;
  readonly successRate: number;
  readonly totalCostUSD: number;
  readonly totalTokens: number;
  readonly providers: ProviderPerformance[];
  readonly models: ModelPerformance[];
  readonly prompts: PromptPerformance[];
  readonly capabilities: CapabilityPerformanceSummary[];
}
