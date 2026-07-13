import { RouteDestination } from './request-router.js';

export interface SourceSelector {
  /**
   * Resolves specific micro-service capabilities or data indexes for split-queries.
   */
  selectBestSources(
    tenantId: string,
    queryKeywords: string[]
  ): Promise<RouteDestination[]>;
}
