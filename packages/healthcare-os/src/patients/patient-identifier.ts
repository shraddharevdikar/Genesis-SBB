import { PatientId } from './patient.js';

export interface PatientIdentifier {
  readonly identifierId: string;
  readonly associatedPatientId: PatientId;
  readonly type: 'NATIONAL_ID' | 'PASSPORT_NUMBER' | 'HEALTH_INSURANCE_CARD_ID' | 'DRIVER_LICENSE_ID';
  readonly valueString: string; // The encrypted identifier string
  readonly issuingAuthorityString: string;
  readonly validFromDate: Date;
  readonly validToDate?: Date;
  readonly status: 'ACTIVE' | 'EXPIRED' | 'SUPERSEDED';
  readonly lastVerifiedAt: Date;
}
