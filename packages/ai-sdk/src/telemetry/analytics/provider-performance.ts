export interface ProviderPerformance {
  readonly providerId: string;
  readonly averageLatencyMs: number;
  readonly totalRequests: number;
  readonly successRate: number; // 0.0 to 1.0
  readonly errorRate: number; // 0.0 to 1.0
  readonly totalCostUSD: number;
}
