export interface ProviderUsage {
  readonly providerId: string;
  readonly totalRequests: number;
  readonly totalTokens: number;
  readonly totalCostUSD: number;
  readonly lastActiveAt: Date;
}
