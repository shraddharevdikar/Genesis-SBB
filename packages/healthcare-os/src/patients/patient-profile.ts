import { PatientId } from './patient.js';

export interface PatientProfile {
  readonly profileId: string;
  readonly associatedPatientId: PatientId;
  readonly firstNameString: string;
  readonly lastNameString: string;
  readonly dateOfBirth: Date;
  readonly genderCode: 'MALE' | 'FEMALE' | 'OTHER' | 'UNKNOWN';
  readonly preferredLanguage: string; // e.g. "en-US"
  readonly residentialAddress: string;
  readonly contactEmailAddress: string;
  readonly contactPhoneNumber: string;
  readonly bloodTypeEnum?: 'A_POSITIVE' | 'A_NEGATIVE' | 'B_POSITIVE' | 'B_NEGATIVE' | 'AB_POSITIVE' | 'AB_NEGATIVE' | 'O_POSITIVE' | 'O_NEGATIVE';
  readonly allergiesList: string[]; // List of recorded allergies (e.g. "Penicillin")
  readonly organDonorFlag: boolean;
  readonly lastModifiedAt: Date;
}
