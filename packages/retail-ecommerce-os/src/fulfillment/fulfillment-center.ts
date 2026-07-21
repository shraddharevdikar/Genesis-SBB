export interface FulfillmentCenter {
  readonly centerId: string;
  readonly uniqueCenterCode: string; // e.g., "FC-NJ-01"
  readonly displayName: string;
  readonly warehouseLocationIdString: string; // associated general Warehouse
  readonly totalOutboundDockLanesCount: number;
  readonly maxDailyParcelShipmentCapacityCount: number;
  readonly supportedShipmentCarriersList: string[]; // e.g. ["UPS", "FedEx", "DHL"]
  readonly currentParcelBacklogCount: number;
  readonly automatedSortersActiveFlag: boolean;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
