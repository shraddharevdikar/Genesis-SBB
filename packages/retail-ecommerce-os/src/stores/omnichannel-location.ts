export interface OmnichannelLocation {
  readonly allocationNodeId: string;
  readonly uniqueNodeCode: string; // e.g. "NODE-ZUR-01"
  readonly displayName: string;
  readonly type: 'FULFILLMENT_CENTER' | 'RETAIL_STORE' | 'DARK_STORE' | 'DROP_SHIP_VENDOR';
  readonly associatedLocationIdString: string; // Links to InventoryLocation / Store
  readonly priorityRankIndex: number; // For order-routing engines (e.g. try FCs first before using store stock)
  readonly geographicalFulfillmentRadiusKilometersDecimal: number;
  readonly maximumPendingOrdersBacklogLimit: number;
  readonly canShipCrossBorderFlag: boolean;
  readonly isStoreFulfillmentEnabledFlag: boolean; // if true, store associates are alerted to pick-and-ship orders
  readonly activeStatusFlag: boolean;
}
