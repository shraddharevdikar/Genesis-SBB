export type ServiceRequestPriorityCode = 'LOW_ROUTINE' | 'MEDIUM_NORMAL' | 'HIGH_URGENT' | 'CRITICAL_OUTAGE';

export interface ServiceRequest {
  readonly serviceRequestId: string;
  readonly uniqueServiceRequestCode: string; // e.g. "SRQ-2026-9921"
  readonly associatedClientIdString: string; // Links to Client
  readonly associatedEngagementIdString?: string; // Links to active Engagement
  readonly requestSubjectString: string;
  readonly detailedDescriptionText: string;
  readonly priority: ServiceRequestPriorityCode;
  readonly requestedByClientContactNameString: string;
  readonly requestedByClientContactEmailText: string;
  readonly assignedSlaResolutionHoursCount?: number;
  readonly assignedStaffRoleIdString?: string; // Consultant or engineer assigned to resolve (HROS)
  readonly ticketLifecycleStatus: 'NEW_UNASSIGNED' | 'ASSIGNED_INVESTIGATION' | 'WORK_IN_PROGRESS' | 'CLIENT_VERIFICATION' | 'RESOLVED_CLOSED' | 'REJECTED_EXCLUDED';
  readonly resolutionSummaryNotesText?: string;
  readonly targetResolutionDate?: Date;
  readonly resolvedTimestamp?: Date;
  readonly createdTimestamp: Date;
  readonly lastModifiedAt: Date;
}
