export interface TenantPolicy {
  readonly tenantId: string;
  readonly tenantTier: 'FREE' | 'STANDARD' | 'ENTERPRISE' | string;
  readonly allowedProviders: string[];
  readonly maxTokensPerMinute?: number;
  readonly maxRequestsPerDay?: number;
}
