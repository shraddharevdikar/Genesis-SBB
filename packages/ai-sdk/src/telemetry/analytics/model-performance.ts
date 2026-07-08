export interface ModelPerformance {
  readonly modelId: string;
  readonly providerId: string;
  readonly averageLatencyMs: number;
  readonly totalRequests: number;
  readonly successRate: number;
  readonly totalTokens: number;
  readonly totalCostUSD: number;
}
