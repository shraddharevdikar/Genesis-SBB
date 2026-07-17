import { BusinessRoleId } from '../identity/business-role-id.js';

export interface RoleCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly roleId: BusinessRoleId;
  readonly uniqueRoleCode: string;
  readonly classificationCode: 'EXECUTIVE' | 'DIRECTOR' | 'MANAGER' | 'SPECIALIST' | 'ANALYST' | 'CUSTOM';
  readonly traceId: string;
  readonly timestamp: Date;
}
