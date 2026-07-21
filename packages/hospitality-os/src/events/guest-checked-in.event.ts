import { Reservation } from '../reservations/reservation.js';
import { HospitalityContext } from '../core/hospitality-context.js';

export interface GuestCheckedInEvent {
  readonly eventId: string;
  readonly eventName: 'GUEST_CHECKED_IN';
  readonly payload: {
    readonly reservationRecord: Reservation;
    readonly assignedRoomNumberString: string;
    readonly checkedInTimestamp: Date;
    readonly identityDocumentVerifiedFlag: boolean;
  };
  readonly context: HospitalityContext;
}
