import { ServiceRequestLifecycleState } from '../core/operations-lifecycle.js';

export interface ServiceRequest {
  readonly requestId: string;
  readonly uniqueRequestCode: string; // e.g. "REQ-SRV-2026-0042"
  readonly customerIdString: string; // From Accounts or Users
  readonly titleString: string;
  readonly requestedServiceCatalogCodeString: string; // Links to standards
  readonly priority: 'LOW' | 'STANDARD' | 'EXPEDITE' | 'EMERGENCY_INCIDENT';
  readonly currentFulfillmentState: ServiceRequestLifecycleState;
  readonly detailedDescriptionText: string;
  readonly resolutionNotesText?: string;
  readonly targetedSLADeadlineDate: Date;
  readonly resolvedAt?: Date;
  readonly createdAt: Date;
}
