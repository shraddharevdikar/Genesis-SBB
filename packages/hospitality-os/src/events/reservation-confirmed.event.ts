import { Reservation } from '../reservations/reservation.js';
import { HospitalityContext } from '../core/hospitality-context.js';

export interface ReservationConfirmedEvent {
  readonly eventId: string;
  readonly eventName: 'RESERVATION_CONFIRMED';
  readonly payload: {
    readonly reservationRecord: Reservation;
    readonly totalBookingPriceAmount: number;
    readonly depositPreAuthReferenceString?: string;
  };
  readonly context: HospitalityContext;
}
