export interface ModelUsage {
  readonly modelId: string;
  readonly providerId: string;
  readonly totalRequests: number;
  readonly totalTokens: number;
  readonly totalCostUSD: number;
  readonly lastActiveAt: Date;
}
