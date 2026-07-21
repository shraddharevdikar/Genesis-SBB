export type PhysicalCleaningState =
  | 'CLEAN_VACANT'
  | 'CLEAN_OCCUPIED'
  | 'DIRTY_VACANT'
  | 'DIRTY_OCCUPIED'
  | 'INSPECTED_READY'
  | 'OUT_OF_ORDER_MAINTENANCE'
  | 'OUT_OF_SERVICE_RENOVATION';

export interface RoomStatus {
  readonly statusId: string;
  readonly associatedRoomIdString: string;
  readonly physicalCleaningState: PhysicalCleaningState;
  readonly roomOccupancyOccupiedFlag: boolean; // Confirmed physically or registered
  readonly guestHousekeepingDndFlag: boolean; // Do Not Disturb
  readonly lastInspectedByStaffRoleIdString?: string;
  readonly lastInspectedTimestamp?: Date;
  readonly housekeepingRequiredNotesText?: string;
  readonly physicalDisinfectionCompletedFlag: boolean; // Health/safety compliance log
  readonly lastModifiedAt: Date;
}
