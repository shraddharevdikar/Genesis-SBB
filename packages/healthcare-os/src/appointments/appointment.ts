import { PatientId } from '../patients/patient.js';
import { ProviderId } from '../providers/healthcare-provider.js';
import { AppointmentStatus } from '../core/care-lifecycle.js';

export interface AppointmentId {
  readonly value: string;
}

export interface Appointment {
  readonly appointmentId: AppointmentId;
  readonly uniqueAppointmentCode: string; // e.g. "APT-2026-0042"
  readonly associatedPatientId: PatientId;
  readonly associatedProviderId: ProviderId;
  readonly targetPhysicianIdString?: string;
  readonly scheduledStartAt: Date;
  readonly scheduledEndAt: Date;
  readonly purposeOfVisitSummary: string; // e.g. "Routine cardiovascular follow-up"
  readonly encounterType: 'TELEMEDICINE_VIDEO' | 'IN_PERSON_CLINIC_VISIT' | 'HOME_CARE_VISIT' | 'EMERGENCY_WALK_IN';
  readonly referralNoteDocURI?: string;
  readonly status: AppointmentStatus;
  readonly lastModifiedAt: Date;
  readonly createdAt: Date;
}
