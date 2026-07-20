export interface WarehouseId {
  readonly value: string;
}

export interface Warehouse {
  readonly warehouseId: WarehouseId;
  readonly uniqueWarehouseCode: string; // e.g. "WH-ZURICH-RAW"
  readonly warehouseNameString: string;
  readonly physicalLocationAddressString: string;
  readonly maximumStorageVolumeCubicMetersDecimal: number;
  readonly supportsColdChainStorageFlag: boolean;
  readonly isHazardousMaterialAccreditedFlag: boolean;
  readonly operationalStatus: 'ACTIVE' | 'AUDIT_LOCKOUT' | 'UNDER_RECONSTRUCTION' | 'CLOSED';
}
