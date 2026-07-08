import { QuotaPeriod } from '../quotas/usage-quota.js';

export interface QuotaReachedEvent {
  readonly eventType: 'quota.reached';
  readonly timestamp: Date;
  readonly quotaId: string;
  readonly tenantId: string;
  readonly period: QuotaPeriod;
  readonly limitType: 'requests' | 'tokens';
  readonly maxAllowed: number;
  readonly currentUsage: number;
}
