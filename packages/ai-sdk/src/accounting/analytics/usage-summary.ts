import { ProviderUsage } from './provider-usage.js';
import { ModelUsage } from './model-usage.js';

export interface ModuleCostBreakdown {
  readonly module: string;
  readonly totalCostUSD: number;
  readonly requestCount: number;
}

export interface CapabilityUsageBreakdown {
  readonly capability: string;
  readonly requestCount: number;
  readonly totalTokens: number;
  readonly totalCostUSD: number;
}

export interface UsageSummary {
  readonly tenantId: string;
  readonly totalCostUSD: number;
  readonly totalTokens: number;
  readonly totalRequests: number;
  readonly periodStart: Date;
  readonly periodEnd: Date;
  readonly providers: ProviderUsage[];
  readonly models: ModelUsage[];
  readonly capabilities: CapabilityUsageBreakdown[];
  readonly modules: ModuleCostBreakdown[];
}
