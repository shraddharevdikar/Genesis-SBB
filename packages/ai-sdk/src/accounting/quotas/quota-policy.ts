import { QuotaPeriod } from './usage-quota.js';

export interface QuotaPolicy {
  readonly policyId: string;
  readonly tenantTier: 'FREE' | 'STANDARD' | 'ENTERPRISE' | string;
  readonly period: QuotaPeriod;
  readonly maxRequests: number;
  readonly maxTokens: number;
  readonly softLimitPercent?: number;
}
