export interface RetailStore {
  readonly storeId: string;
  readonly uniqueStoreCode: string; // e.g., "STR-ZURICH-BAHNHOF"
  readonly storeNameString: string;
  readonly associatedWarehouseLocationIdString: string; // stock tracking location
  readonly storePhysicalAddressString: string;
  readonly openingHoursDescriptionText: string; // e.g. "Mon-Sat 09:00-20:00"
  readonly managerStaffRoleIdString: string; // Links to HROS / Role
  readonly pointOfSaleCount: number;
  readonly bopisPickupDeskAvailableFlag: boolean;
  readonly storeContactEmail: string;
  readonly storeContactPhone: string;
  readonly activeStatusFlag: boolean;
}
