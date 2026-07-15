import { PackageId } from '../identity/package-id.js';
import { PublisherId } from '../identity/publisher-id.js';
import { MarketplaceCategoryCode } from './category.js';

export interface Listing {
  readonly listingId: string;
  readonly packageId: PackageId;
  readonly publisherId: PublisherId;
  readonly title: string;
  readonly shortDescription: string;
  readonly markdownDescriptionUri: string;
  readonly primaryCategoryCode: MarketplaceCategoryCode;
  readonly secondaryCategoryCodesList: MarketplaceCategoryCode[];
  readonly initialPublishedVersion: string;
  readonly latestPublishedVersion: string;
  readonly isFeatured: boolean;
  readonly listedAt: Date;
}
