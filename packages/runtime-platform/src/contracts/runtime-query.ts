export interface RuntimeQuery {
  readonly queryId: string;
  readonly tenantId: string;
  readonly selector: string;
  readonly parameters: Record<string, any>;
  readonly limit?: number;
  readonly cacheStrategy?: 'FORCE_CACHE' | 'BYPASS_CACHE' | 'CACHE_IF_FRESH';
}
