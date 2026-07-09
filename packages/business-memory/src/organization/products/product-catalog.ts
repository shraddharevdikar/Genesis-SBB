export interface ProductCatalogItem {
  readonly productId: string;
  readonly name: string;
  readonly description: string;
  readonly SKU: string;
  readonly productLifecycleStage: 'CONCEPTION' | 'DEVELOPMENT' | 'GENERAL_AVAILABILITY' | 'DEPRECATED' | 'END_OF_LIFE';
  readonly productOwnerRoleId: string; // references OrganizationalRole
  readonly targetMarketSegments: string[];
  readonly basePriceUSD: number;
}

export interface ProductCatalog {
  readonly catalogId: string;
  readonly tenantId: string;
  readonly items: ProductCatalogItem[];
  readonly lastReviewedAt: Date;
}
