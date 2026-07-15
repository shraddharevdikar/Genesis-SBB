import { Listing } from './listing.js';
import { Category } from './category.js';
import { FeaturedCollection } from './featured-collection.js';

export interface MarketplaceCatalog {
  readonly categories: Category[];
  readonly listings: Listing[];
  readonly featuredCollections: FeaturedCollection[];
  readonly lastSyncedAt: Date;
}
