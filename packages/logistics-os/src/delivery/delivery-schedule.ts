export interface ScheduledDeliveryRunRow {
  readonly deliveryIdString: string; // Links to Delivery
  readonly optimizedSequenceOrderIndex: number; // e.g. 1st, 2nd, 3rd drop
  readonly estimatedArrivalWindowStart: Date;
  readonly estimatedArrivalWindowEnd: Date;
}

export interface DeliverySchedule {
  readonly scheduleId: string;
  readonly uniqueScheduleCode: string; // e.g., "SCH-DLV-20261015-ZUR"
  readonly dispatchWarehouseIdString: string;
  readonly scheduledDate: Date;
  readonly assignedDriverStaffRoleIdString: string; // Links to HROS
  readonly assignedVehicleIdString: string; // Links to Vehicle
  readonly scheduledDeliveriesRowsList: ScheduledDeliveryRunRow[];
  readonly totalPackagesCount: number;
  readonly totalWeightKgDecimal: number;
  readonly routeIsDispatchedFlag: boolean;
  readonly completedTimestamp?: Date;
  readonly lastModifiedAt: Date;
}
