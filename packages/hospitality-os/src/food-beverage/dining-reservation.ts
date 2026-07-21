import { GuestId } from '../guests/guest.js';

export interface DiningReservation {
  readonly diningReservationId: string;
  readonly uniqueDiningReservationCode: string; // e.g., "DIN-RES-2026-99214"
  readonly associatedRestaurantIdString: string;
  readonly associatedGuestId?: GuestId; // Null if walk-in or non-staying public guest
  readonly leadGuestNameString: string;
  readonly guestContactEmailText?: string;
  readonly partySizeCount: number;
  readonly scheduledSessionTimestamp: Date;
  readonly assignedTableNumbersList: string[];
  readonly guestSpecialDietaryRequestsNotes?: string;
  readonly currentReservationStatus: 'BOOKED_CONFIRMED' | 'SEATED_IN_HOUSE' | 'COMPLETED_DEPARTED' | 'NO_SHOW' | 'CANCELLED';
  readonly bookedTimestamp: Date;
  readonly lastModifiedAt: Date;
}
