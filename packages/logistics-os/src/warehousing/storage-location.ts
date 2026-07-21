export type StorageZoneTypeCode = 'BULK_PALLET_RACK' | 'PICKING_SHELVES' | 'COLD_ROOM' | 'HAZMAT_SECURE' | 'CROSS_DOCK_STAGING' | 'RECEIVING_STAGING' | 'SHIPPING_STAGING';

export interface StorageLocation {
  readonly locationId: string;
  readonly uniqueLocationCode: string; // e.g., "WH-ZUR-N-ZONE-A-AISLE-12"
  readonly associatedWarehouseIdString: string; // Links to Warehouse
  readonly zoneCodeString: string; // e.g. "ZONE-A"
  readonly aisleCodeString: string; // e.g. "AISLE-12"
  readonly bayCodeString: string; // e.g. "BAY-03"
  readonly levelCodeString: string; // e.g. "LVL-04"
  readonly zoneType: StorageZoneTypeCode;
  readonly maximumWeightCapacityKgDecimal: number;
  readonly widthMetersDecimal: number;
  readonly heightMetersDecimal: number;
  readonly depthMetersDecimal: number;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
