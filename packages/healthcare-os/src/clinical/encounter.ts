import { PatientId } from '../patients/patient.js';
import { ProviderId } from '../providers/healthcare-provider.js';
import { EncounterStatus } from '../core/care-lifecycle.js';

export interface EncounterId {
  readonly value: string;
}

export interface MedicalEncounter {
  readonly encounterId: EncounterId;
  readonly uniqueEncounterCode: string; // e.g. "ENC-2026-0042-99"
  readonly associatedPatientId: PatientId;
  readonly associatedProviderId: ProviderId;
  readonly associatedAppointmentIdString?: string;
  readonly attendingPhysicianIdString: string;
  readonly facilityDepartmentIdString?: string;
  readonly admittedAt: Date;
  readonly dischargedAt?: Date;
  readonly encounterStatus: EncounterStatus;
  readonly dischargeDispositionText?: string; // e.g. "Discharged to home" or "Transferred to specialist ward"
  readonly clinicalAuditPassedFlag: boolean;
  readonly lastModifiedAt: Date;
}
