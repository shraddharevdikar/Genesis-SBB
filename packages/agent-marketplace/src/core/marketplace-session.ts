import { MarketplaceId } from '../identity/marketplace-id.js';

export interface MarketplaceSession {
  readonly sessionId: string;
  readonly marketplaceId: MarketplaceId;
  readonly tenantId: string;
  readonly activeListingCount: number;
  readonly establishedAt: Date;
  readonly lastActivityAt: Date;
}
