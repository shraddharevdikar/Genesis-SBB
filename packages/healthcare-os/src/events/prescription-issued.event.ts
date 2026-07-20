import { ElectronicPrescription } from '../pharmacy/prescription.js';
import { HealthcareContext } from '../core/healthcare-context.js';

export interface PrescriptionIssuedEvent {
  readonly eventId: string;
  readonly eventName: 'PRESCRIPTION_ISSUED';
  readonly payload: {
    readonly prescription: ElectronicPrescription;
  };
  readonly context: HealthcareContext;
}
