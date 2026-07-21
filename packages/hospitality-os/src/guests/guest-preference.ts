import { GuestId } from './guest.js';

export interface GuestPreference {
  readonly preferenceId: string;
  readonly associatedGuestId: GuestId;
  readonly preferredRoomTemperatureCelsius?: number; // e.g. 21.5
  readonly preferredPillowType?: 'FEATHER_DOWN' | 'MEMORY_FOAM' | 'HYPOALLERGENIC' | 'ORTHOPEDIC';
  readonly specialDietaryRequirementsList: string[]; // e.g. ["GLUTEN_FREE", "VEGAN"]
  readonly highFloorRequestedFlag?: boolean;
  readonly quietRoomRequestedFlag?: boolean;
  readonly accessibleRoomRequiredFlag?: boolean; // ADA / universal access compliance
  readonly dailyTurndownServiceRequestedFlag?: boolean;
  readonly digitalWakeupCallTimeText?: string; // e.g., "07:30"
  readonly customInstructionsNotesText?: string;
  readonly lastModifiedAt: Date;
}
