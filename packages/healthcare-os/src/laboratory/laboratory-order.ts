import { PatientId } from '../patients/patient.js';

export interface LaboratoryOrder {
  readonly orderId: string;
  readonly uniqueOrderCode: string; // e.g. "LBO-2026-CH-744"
  readonly associatedPatientId: PatientId;
  readonly associatedEncounterIdString?: string;
  readonly orderingPhysicianIdString: string;
  readonly requestedDiagnosticTestIdsList: string[];
  readonly clinicalIndicationReasonText: string;
  readonly biologicalSampleCollectedFlag: boolean;
  readonly sampleBarCodeText?: string;
  readonly priorityLevel: 'ROUTINE' | 'URGENT' | 'STAT_EMERGENCY';
  readonly orderStatus: 'PLACED' | 'SAMPLE_COLLECTED' | 'IN_ANALYSIS' | 'COMPLETED_RESULTS_RELEASED' | 'REJECTED_SAMPLE_ERROR';
  readonly orderedAt: Date;
  readonly sampleCollectedAt?: Date;
}
