export interface Room {
  readonly roomId: string;
  readonly uniqueRoomCode: string; // e.g. "ROM-ZUR-302"
  readonly associatedPropertyIdString: string; // Links to Property
  readonly roomNumberString: string; // e.g. "302"
  readonly floorLevelNumber: number; // e.g. 3
  readonly roomCategoryCodeString: string; // Links to RoomCategory
  readonly physicalLocationDetailsText?: string; // e.g. "North wing, near main elevator"
  readonly maxAdultOccupancyCount: number;
  readonly maxChildOccupancyCount: number;
  readonly physicalBedConfigurationJSON: string; // e.g. {"KING": 1, "ROLLAWAY_ALLOWED": true}
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
