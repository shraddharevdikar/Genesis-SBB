export interface MarketplaceContext {
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly operatorId: string; // User/Process identifying who is browsing/purchasing/publishing
  readonly timestamp: Date;
}
