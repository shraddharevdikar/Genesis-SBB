import { GuestId } from '../guests/guest.js';

export type HospitalityFacilityType = 'SPA_TREATMENT' | 'FITNESS_SESSION' | 'POOL_CABANA_RENTAL' | 'TENNIS_COURT';

export interface FacilityBooking {
  readonly facilityBookingId: string;
  readonly uniqueFacilityBookingCode: string; // e.g. "FAC-BKG-2026-9921"
  readonly associatedPropertyIdString: string;
  readonly facilityType: HospitalityFacilityType;
  readonly associatedGuestId: GuestId;
  readonly scheduledStartTimestamp: Date;
  readonly scheduledEndTimestamp: Date;
  readonly associatedStaffRoleIdString?: string; // e.g. Certified Therapist or Tennis Coach
  readonly totalChargeAmount: number; // Charges sent to Folio
  readonly isPaidFlag: boolean;
  readonly bookingNotesText?: string;
  readonly currentBookingStatus: 'BOOKED' | 'CHECKED_IN' | 'COMPLETED' | 'CANCELLED';
  readonly bookedTimestamp: Date;
}
