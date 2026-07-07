export enum ProviderHealthStatus {
  HEALTHY = 'healthy',
  DEGRADED = 'degraded',
  OFFLINE = 'offline',
  MAINTENANCE = 'maintenance',
}

export interface ProviderHealth {
  readonly status: ProviderHealthStatus;
  readonly lastCheckedAt: Date | string;
  readonly latencyMs?: number;
  readonly errorMessage?: string;
}
