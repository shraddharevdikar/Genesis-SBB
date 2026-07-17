import { BusinessRoleId } from '../identity/business-role-id.js';
import { ResponsibilityId } from '../identity/responsibility-id.js';

export interface ResponsibilityAssignedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly targetRoleId: BusinessRoleId;
  readonly assignedResponsibilityId: ResponsibilityId;
  readonly responsibilityCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
