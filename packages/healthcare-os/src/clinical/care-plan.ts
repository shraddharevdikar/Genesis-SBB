import { PatientId } from '../patients/patient.js';
import { CarePlanState } from '../core/care-lifecycle.js';

export interface CareGoal {
  readonly goalId: string;
  readonly descriptionText: string; // e.g. "Reduce systolic blood pressure to < 130 mmHg"
  readonly targetAchievementDate: Date;
  readonly currentStatus: 'NOT_MET' | 'PARTIALLY_MET' | 'MET' | 'SUPERSEDED';
}

export interface CarePlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "CP-CARDIO-HYPERTENSION"
  readonly associatedPatientId: PatientId;
  readonly leadCareCoordinatorRoleIdString: string; // e.g. "CARE_COORDINATOR"
  readonly carePlanState: CarePlanState;
  readonly goalsList: CareGoal[];
  readonly multidisciplinaryTeamMemberRoleIdsList: string[]; // Role IDs of team members involved (Physicians, Nurses, Dietitians)
  readonly clientConsentAcquiredFlag: boolean;
  readonly clientConsentDocumentStorageURI?: string;
  readonly startedAt: Date;
  readonly lastModifiedAt: Date;
}
