import { GuestId } from '../guests/guest.js';
import { GuestLifecycleState } from '../core/guest-lifecycle.js';

export interface Reservation {
  readonly reservationId: string;
  readonly uniqueReservationCode: string; // e.g. "RES-ZUR-2026-0814A"
  readonly associatedGuestId: GuestId;
  readonly primaryContactGuestName: string;
  readonly scheduledCheckInDate: Date;
  readonly scheduledCheckOutDate: Date;
  readonly actualCheckInTimestamp?: Date;
  readonly actualCheckOutTimestamp?: Date;
  readonly guestAdultsCount: number;
  readonly guestChildrenCount: number;
  readonly selectedRoomCategoryIdString: string; // Requested room category
  readonly allocatedRoomIdString?: string; // Set during room-allocation
  readonly currentReservationStatus: GuestLifecycleState;
  readonly travelAgentCorporateCode?: string; // Links to SalesOS/MarketingOS campaigns
  readonly remarksNotesText?: string;
  readonly lastModifiedAt: Date;
}
