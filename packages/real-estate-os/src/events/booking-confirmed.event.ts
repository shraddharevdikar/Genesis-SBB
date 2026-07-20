import { PropertyBooking } from '../sales/booking.js';
import { IndustryContext } from '../core/industry-context.js';

export interface BookingConfirmedEvent {
  readonly eventId: string;
  readonly eventName: 'BOOKING_CONFIRMED';
  readonly payload: {
    readonly booking: PropertyBooking;
  };
  readonly context: IndustryContext;
}
