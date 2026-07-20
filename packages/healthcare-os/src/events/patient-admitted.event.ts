import { Patient } from '../patients/patient.js';
import { MedicalEncounter } from '../clinical/encounter.js';
import { HealthcareContext } from '../core/healthcare-context.js';

export interface PatientAdmittedEvent {
  readonly eventId: string;
  readonly eventName: 'PATIENT_ADMITTED';
  readonly payload: {
    readonly patient: Patient;
    readonly encounter: MedicalEncounter;
  };
  readonly context: HealthcareContext;
}
