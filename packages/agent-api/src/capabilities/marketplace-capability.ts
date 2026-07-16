import { ApiContext } from '../core/api-context.js';

export interface MarketplaceCapability {
  readonly capabilityId: string;
  searchMarketplaceSolutions(
    queryTextString: string,
    targetCategoryName: string,
    context: ApiContext
  ): Promise<Array<{ readonly solutionId: string; readonly title: string; readonly priceChfValue: number }>>;

  deploySolutionToTenant(
    solutionId: string,
    targetTenantId: string,
    context: ApiContext
  ): Promise<{ readonly installationPlanId: string; readonly wasSuccessful: boolean }>;
}
