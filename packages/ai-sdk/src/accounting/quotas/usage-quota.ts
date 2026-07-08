export type QuotaPeriod = 'daily' | 'weekly' | 'monthly';

export interface UsageQuota {
  readonly quotaId: string;
  readonly tenantId: string;
  readonly period: QuotaPeriod;
  readonly maxRequests: number;
  readonly maxTokens: number;
  readonly currentRequests: number;
  readonly currentTokens: number;
  readonly windowStart: Date;
}
