import { PatientId } from '../patients/patient.js';

export interface TreatmentIntervention {
  readonly interventionId: string;
  readonly sequenceNumber: number;
  readonly descriptionText: string; // e.g. "Chemotherapy administration protocol"
  readonly targetedAnatomicalSiteText?: string;
  readonly estimatedSessionCount: number;
  readonly activeFlag: boolean;
}

export interface PatientTreatmentPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "TRT-PLN-ONCO-042"
  readonly associatedPatientId: PatientId;
  readonly orderingPhysicianIdString: string;
  readonly primaryIndicationText: string; // diagnosis reference or reason
  readonly plannedStartDate: Date;
  readonly plannedEndDate: Date;
  readonly interventionsList: TreatmentIntervention[];
  readonly totalPlannedCostAmount: number;
  readonly currencyCode: string;
  readonly clinicalReviewIntervalMonthsCount: number;
  readonly status: 'DRAFT' | 'ONGOING' | 'COMPLETED' | 'SUSPENDED';
  readonly lastReviewedAt: Date;
}
