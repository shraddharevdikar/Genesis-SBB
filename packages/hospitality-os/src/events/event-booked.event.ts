import { EventBooking } from './event-booking.js';
import { HospitalityContext } from '../core/hospitality-context.js';

export interface EventBookedEvent {
  readonly eventId: string;
  readonly eventName: 'EVENT_BOOKED';
  readonly payload: {
    readonly eventBookingRecord: EventBooking;
    readonly banquetCateringIncludedFlag: boolean;
    readonly conferenceRentalsIncludedFlag: boolean;
  };
  readonly context: HospitalityContext;
}
