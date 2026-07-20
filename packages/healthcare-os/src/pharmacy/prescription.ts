import { PatientId } from '../patients/patient.js';

export interface PrescribedLine {
  readonly lineId: string;
  readonly associatedMedicationIdString: string;
  readonly dosageFrequencyText: string; // e.g. "Three times daily with meals"
  readonly durationDaysCount: number; // e.g. 14 days
  readonly totalQuantityDispenseCount: number; // e.g. 42 tablets
  readonly allowedRefillsCount: number; // e.g. 2 refills
  readonly dispenseAsWrittenBrandRequiredFlag: boolean;
  readonly clinicalInstructionsText: string;
}

export interface ElectronicPrescription {
  readonly prescriptionId: string;
  readonly uniquePrescriptionCode: string; // e.g. "RX-2026-CH-993"
  readonly associatedPatientId: PatientId;
  readonly associatedEncounterIdString?: string;
  readonly prescribingPhysicianIdString: string;
  readonly linesList: PrescribedLine[];
  readonly classification: 'STANDARD_OUTPATIENT' | 'INPATIENT_STAT' | 'NARCOTIC_SECURED';
  readonly digitalSignatureDocURI: string;
  readonly status: 'PENDING_FILL' | 'PARTIALLY_FILLED' | 'COMPLETED_FILLED' | 'EXPIRED' | 'CANCELLED';
  readonly issuedAt: Date;
  readonly validUntilDate: Date;
}
