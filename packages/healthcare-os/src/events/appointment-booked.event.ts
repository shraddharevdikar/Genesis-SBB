import { Appointment } from '../appointments/appointment.js';
import { HealthcareContext } from '../core/healthcare-context.js';

export interface AppointmentBookedEvent {
  readonly eventId: string;
  readonly eventName: 'APPOINTMENT_BOOKED';
  readonly payload: {
    readonly appointment: Appointment;
  };
  readonly context: HealthcareContext;
}
