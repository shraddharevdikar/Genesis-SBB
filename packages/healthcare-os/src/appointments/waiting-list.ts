import { PatientId } from '../patients/patient.js';
import { ProviderId } from '../providers/healthcare-provider.js';

export interface WaitingListEntry {
  readonly entryId: string;
  readonly associatedPatientId: PatientId;
  readonly requestedPhysicianIdString?: string;
  readonly medicalUrgencyLevel: 'ROUTINE_CONTROL' | 'MEDIUM_CHRONIC' | 'HIGH_CRITICAL' | 'ACUTE_EMERGENCY';
  readonly referralSpecialtyText: string;
  readonly dateAdded: Date;
  readonly preferredDaysStringJSON: string; // e.g. '["Monday", "Wednesday"]'
  readonly status: 'ACTIVE_WAITING' | 'OFFERED_SLOT' | 'SCHEDULED_REMOVED' | 'EXPIRED_ABANDONED';
  readonly lastContactedAt?: Date;
}

export interface HealthcareWaitingList {
  readonly listId: string;
  readonly uniqueListCode: string; // e.g. "WTL-CARDIOLOGY-ZURICH"
  readonly associatedProviderId: ProviderId;
  readonly departmentNameString: string;
  readonly waitingEntriesList: WaitingListEntry[];
  readonly averageWaitTimeDaysDecimal: number;
  readonly maxCapacityLimitCount: number;
  readonly lastReviewedAt: Date;
}
