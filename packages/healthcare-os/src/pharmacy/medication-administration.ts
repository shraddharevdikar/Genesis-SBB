import { PatientId } from '../patients/patient.js';

export interface MedicationAdministrationRecord {
  readonly recordId: string;
  readonly uniqueRecordCode: string; // e.g. "MAR-2026-A120"
  readonly associatedPatientId: PatientId;
  readonly associatedPrescriptionIdString?: string;
  readonly associatedMedicationIdString: string;
  readonly administeringStaffIdString: string; // e.g. nurseId or specialistId
  readonly doubleCheckedVerifiedStaffIdString?: string; // Required for high-alert drugs (insulin, anticoagulants)
  readonly administeredVolumeDoseText: string; // e.g. "5ml" or "1 tablet"
  readonly actualRouteOfAdministration: 'ORAL_PO' | 'INTRAVENOUS_IV' | 'INTRAMUSCULAR_IM' | 'SUBCUTANEOUS_SC';
  readonly validationStatus: 'ADMINISTERED' | 'REFUSED' | 'HELD_CLINICAL_REASON' | 'MISSED_LOGGED';
  readonly notesClinicalReasonText?: string; // Reason why drug was held, or refused (e.g., "Patient hypotensive")
  readonly administeredAt: Date;
}
