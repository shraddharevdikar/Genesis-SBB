export interface RoutingPolicy {
  readonly maxCostLimit?: number;
  readonly preferredRegion?: string;
  readonly minCapability?: string;
  readonly maxLatencyMs?: number;
  readonly tenantTier?: 'FREE' | 'STANDARD' | 'ENTERPRISE' | string;
}
