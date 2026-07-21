export type WarehouseClassCode = 'REGIONAL_DISTRIBUTION_CENTER' | 'FULFILLMENT_HUB' | 'CROSS_DOCK_TERMINAL' | 'RETAIL_BACKROOM_MICRO' | 'COLD_STORAGE_FACILITY';

export interface Warehouse {
  readonly warehouseId: string;
  readonly uniqueWarehouseCode: string; // e.g. "WH-ZUR-NORTH"
  readonly associatedPropertyIdString?: string; // Links to RealEstateOS/Campus
  readonly warehouseDisplayNameString: string;
  readonly warehouseClass: WarehouseClassCode;
  readonly physicalShippingAddressString: string;
  readonly geoLatitudeDecimal?: number;
  readonly geoLongitudeDecimal?: number;
  readonly totalStorageCapacityCubicMetersDecimal: number;
  readonly safetyManagerStaffRoleIdString?: string; // Links to HROS
  readonly hazardousMaterialsAuthorizedFlag: boolean; // EPA compliance
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
