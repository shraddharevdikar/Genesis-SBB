export type EncounterStatus =
  | 'PLANNED'
  | 'ARRIVED_CHECKED_IN'
  | 'IN_PROGRESS'
  | 'ON_HOLD'
  | 'COMPLETED_DISCHARGED'
  | 'CANCELLED';

export type AppointmentStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'RESCHEDULED'
  | 'NO_SHOW'
  | 'CANCELLED'
  | 'COMPLETED';

export type PatientAdmissionState =
  | 'OUTPATIENT'
  | 'ADMITTED_INPATIENT'
  | 'INTENSIVE_CARE_ICU'
  | 'OBSERVATION'
  | 'DISCHARGED';

export type CarePlanState =
  | 'PROPOSED'
  | 'ACTIVE'
  | 'SUSPENDED'
  | 'COMPLETED'
  | 'ABANDONED';

export type MedicalBillingStatus =
  | 'PENDING_CHARGES'
  | 'INSURANCE_CLAIM_SUBMITTED'
  | 'INSURANCE_CLAIM_APPROVED'
  | 'INSURANCE_CLAIM_REJECTED'
  | 'PATIENT_COPAY_DUE'
  | 'SETTLED_PAID';

export interface PatientCareState {
  readonly currentAdmissionState: PatientAdmissionState;
  readonly activeEncounterIdString?: string;
  readonly lastAssessmentAt: Date;
  readonly isDNRFlag: boolean; // Do Not Resuscitate clinical preference
}
