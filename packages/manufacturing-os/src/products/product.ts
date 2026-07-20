export interface ProductId {
  readonly value: string;
}

export interface Product {
  readonly productId: ProductId;
  readonly uniqueProductCode: string; // e.g. "PRD-TURBINE-X100"
  readonly partNumberString: string; // e.g. "PN-992-0012-A"
  readonly displayName: string;
  readonly productFamilyIdString: string;
  readonly unitOfMeasure: 'UNIT' | 'KILOGRAM' | 'LITER' | 'METER' | 'SQUARE_METER';
  readonly isHazardousMaterialFlag: boolean;
  readonly activeStatusFlag: boolean;
  readonly createdAt: Date;
  readonly lastModifiedAt: Date;
}
