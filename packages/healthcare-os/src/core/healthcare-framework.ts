import { HealthcareContext } from './healthcare-context.js';
import { Patient, PatientId } from '../patients/patient.js';
import { PatientProfile } from '../patients/patient-profile.js';
import { Appointment, AppointmentId } from '../appointments/appointment.js';
import { MedicalEncounter, EncounterId } from '../clinical/encounter.js';
import { PatientTreatmentPlan } from '../clinical/treatment-plan.js';
import { ElectronicPrescription } from '../pharmacy/prescription.js';
import { LaboratoryOrder } from '../laboratory/laboratory-order.js';

export interface HealthcareFramework {
  /**
   * Registers a new patient within the sovereign system and compiles their clinical profile.
   */
  registerPatient(
    uniquePatientCode: string,
    primaryRecordNumberMRN: string,
    profileData: Omit<PatientProfile, 'profileId' | 'associatedPatientId' | 'lastModifiedAt'>,
    context?: HealthcareContext
  ): Promise<Patient>;

  /**
   * Schedules a medical consultation or diagnostic appointment with a provider.
   */
  scheduleAppointment(
    uniqueAppointmentCode: string,
    associatedPatientId: PatientId,
    associatedProviderIdString: string,
    scheduledStartAt: Date,
    scheduledEndAt: Date,
    purposeOfVisitSummary: string,
    encounterType: 'TELEMEDICINE_VIDEO' | 'IN_PERSON_CLINIC_VISIT' | 'HOME_CARE_VISIT' | 'EMERGENCY_WALK_IN',
    targetPhysicianIdString?: string,
    context?: HealthcareContext
  ): Promise<Appointment>;

  /**
   * Initializes and records a physical or virtual medical encounter.
   */
  recordEncounter(
    uniqueEncounterCode: string,
    associatedPatientId: PatientId,
    associatedProviderIdString: string,
    attendingPhysicianIdString: string,
    facilityDepartmentIdString?: string,
    associatedAppointmentIdString?: string,
    context?: HealthcareContext
  ): Promise<MedicalEncounter>;

  /**
   * Deploys a customized clinical treatment plan for a registered patient.
   */
  createTreatmentPlan(
    uniquePlanCode: string,
    associatedPatientId: PatientId,
    orderingPhysicianIdString: string,
    primaryIndicationText: string,
    plannedStartDate: Date,
    plannedEndDate: Date,
    totalPlannedCostAmount: number,
    currencyCode: string,
    context?: HealthcareContext
  ): Promise<PatientTreatmentPlan>;

  /**
   * Formulates and issues a signed electronic prescription to be filled by any authorized pharmacy.
   */
  issuePrescription(
    uniquePrescriptionCode: string,
    associatedPatientId: PatientId,
    prescribingPhysicianIdString: string,
    classification: 'STANDARD_OUTPATIENT' | 'INPATIENT_STAT' | 'NARCOTIC_SECURED',
    linesJSON: string, // Detailed PrescribedLine list as JSON
    digitalSignatureDocURI: string,
    associatedEncounterIdString?: string,
    context?: HealthcareContext
  ): Promise<ElectronicPrescription>;

  /**
   * Processes and queues a diagnostic laboratory order for physical sample collections.
   */
  processLaboratoryOrder(
    uniqueOrderCode: string,
    associatedPatientId: PatientId,
    orderingPhysicianIdString: string,
    requestedDiagnosticTestIdsList: string[],
    clinicalIndicationReasonText: string,
    priorityLevel: 'ROUTINE' | 'URGENT' | 'STAT_EMERGENCY',
    associatedEncounterIdString?: string,
    context?: HealthcareContext
  ): Promise<LaboratoryOrder>;

  /**
   * Admits a patient as an inpatient, assigning their initial ward bed or ICU parameters.
   */
  admitPatient(
    associatedPatientId: PatientId,
    targetEncounterId: EncounterId,
    assignedBedIdString: string,
    clinicalReasonSummaryText: string,
    context?: HealthcareContext
  ): Promise<MedicalEncounter>;

  /**
   * Initiates the discharge process, concluding the medical encounter and releasing the facility bed.
   */
  dischargePatient(
    targetEncounterId: EncounterId,
    dischargeDispositionText: string,
    dischargeSummaryNotesText: string,
    context?: HealthcareContext
  ): Promise<MedicalEncounter>;
}
