export interface FeaturedCollection {
  readonly collectionId: string;
  readonly title: string; // e.g. "SBB Operations Essentials"
  readonly editorialDescription: string;
  readonly listingIdsList: string[];
  readonly bannerImageUri?: string;
  readonly isActive: boolean;
  readonly displayOrder: number;
}
