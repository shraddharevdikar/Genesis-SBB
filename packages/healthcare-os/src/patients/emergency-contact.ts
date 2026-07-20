import { PatientId } from './patient.js';

export interface EmergencyContact {
  readonly contactId: string;
  readonly associatedPatientId: PatientId;
  readonly fullNameString: string;
  readonly relationshipToPatient: 'SPOUSE' | 'PARENT' | 'CHILD' | 'SIBLING' | 'LEGAL_GUARDIAN' | 'OTHER';
  readonly contactPhoneNumber: string;
  readonly contactEmailAddress: string;
  readonly physicalAddress: string;
  readonly legalRepresentativeAuthorityFlag: boolean; // True if the contact has power of attorney
  readonly authorizedToReceiveClinicalUpdatesFlag: boolean;
}
