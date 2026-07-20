import { InventoryUnitId } from '../projects/inventory.js';

export interface MaintenanceRequest {
  readonly requestId: string;
  readonly uniqueRequestCode: string; // e.g. "MNT-2026-CH-0145"
  readonly associatedUnitId: InventoryUnitId;
  readonly requesterResidentIdString: string;
  readonly issueCategory: 'PLUMBING' | 'ELECTRICAL' | 'HVAC_AIRCON' | 'ELEVATOR_ACCESS' | 'CLEANING_WASTE' | 'SECURITY_SYSTEMS';
  readonly subjectTitle: string;
  readonly descriptionText: string;
  readonly severityLevel: 'LOW_ROUTINE' | 'MEDIUM_URGENT' | 'HIGH_EMERGENCY';
  readonly status: 'SUBMITTED' | 'WORK_SCHEDULED' | 'IN_PROGRESS' | 'COMPLETED_VERIFIED' | 'CANCELLED';
  readonly assignedTechnicianName?: string;
  readonly costChargedToResidentAmount: number;
  readonly currencyCode: string;
  readonly submittedAt: Date;
  readonly resolvedAt?: Date;
}
