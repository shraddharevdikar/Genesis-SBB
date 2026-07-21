import { Reservation } from '../reservations/reservation.js';
import { HospitalityContext } from '../core/hospitality-context.js';

export interface GuestCheckedOutEvent {
  readonly eventId: string;
  readonly eventName: 'GUEST_CHECKED_OUT';
  readonly payload: {
    readonly reservationRecord: Reservation;
    readonly totalAmountBilledDecimal: number;
    readonly folioOutstandingBalanceRemainingDecimal: number; // Must be 0.00 for checkout compliance
    readonly checkedOutTimestamp: Date;
    readonly feedbackSatisfactionScore?: number;
  };
  readonly context: HospitalityContext;
}
