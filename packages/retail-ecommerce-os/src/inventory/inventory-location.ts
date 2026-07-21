export interface LocationId {
  readonly value: string;
}

export enum InventoryLocationType {
  CENTRAL_DISTRIBUTION_WAREHOUSE = 'CENTRAL_DISTRIBUTION_WAREHOUSE',
  REGIONAL_FULFILLMENT_CENTER = 'REGIONAL_FULFILLMENT_CENTER',
  RETAIL_STORE_FRONT = 'RETAIL_STORE_FRONT',
  DARK_STORE_URBAN_HUB = 'DARK_STORE_URBAN_HUB',
  EXTERNAL_3PL_PARTNER = 'EXTERNAL_3PL_PARTNER'
}

export interface InventoryLocation {
  readonly locationId: LocationId;
  readonly uniqueLocationCode: string; // e.g., "LOC-ZURICH-POS"
  readonly displayName: string;
  readonly locationType: InventoryLocationType;
  readonly physicalAddressString: string;
  readonly geoLatitudeDecimal?: number;
  readonly geoLongitudeDecimal?: number;
  readonly supportsHomeDeliveryShippingFlag: boolean;
  readonly supportsInStorePickupBOPISFlag: boolean; // Buy Online, Pickup In Store
  readonly activeStatusFlag: boolean;
}
