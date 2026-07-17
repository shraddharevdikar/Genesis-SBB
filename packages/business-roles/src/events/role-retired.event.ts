import { BusinessRoleId } from '../identity/business-role-id.js';

export interface RoleRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredRoleId: BusinessRoleId;
  readonly uniqueRoleCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
