export interface SupplierId {
  readonly value: string;
}

export interface Supplier {
  readonly supplierId: SupplierId;
  readonly uniqueSupplierCode: string; // e.g. "SPL-STEEL-CORP"
  readonly registeredSupplierName: string;
  readonly officialTaxRegistrationNumberText: string;
  readonly physicalOfficeAddress: string;
  readonly primaryContactEmail: string;
  readonly primaryContactPhone: string;
  readonly supplierRatingScoreDecimal: number; // e.g. 4.8 out of 5.0
  readonly paymentTermsDaysCount: number; // e.g. 30 (Net 30)
  readonly complianceCertifiedFlag: boolean; // True if ISO/etc. certified
  readonly activeFlag: boolean;
  readonly registeredAt: Date;
}
