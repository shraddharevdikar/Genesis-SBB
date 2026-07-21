export interface ProductCategory {
  readonly categoryId: string;
  readonly uniqueCategoryCode: string; // e.g., "CAT-ELECTRONICS-PHONES"
  readonly categoryNameString: string;
  readonly parentCategoryIdString?: string; // Supports hierarchical category trees
  readonly displaySortOrderIndex: number;
  readonly seoTitleText?: string;
  readonly seoMetaDescriptionText?: string;
  readonly activeStatusFlag: boolean;
  readonly createdAt: Date;
}
