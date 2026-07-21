export interface ProductCollection {
  readonly collectionId: string;
  readonly uniqueCollectionCode: string; // e.g., "COLL-SUMMER-VIBES-2026"
  readonly collectionTitle: string;
  readonly displayBannerImageURI?: string;
  readonly productIdsList: string[]; // List of primary product IDs included in the collection
  readonly dynamicRuleQueryJSON?: string; // Query criteria to automatically add products (e.g., tags, category matching)
  readonly featureOnHomepageFlag: boolean;
  readonly activeStatusFlag: boolean;
  readonly createdAt: Date;
}
