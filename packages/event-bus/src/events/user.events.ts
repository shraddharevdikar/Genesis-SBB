import { BaseDomainEvent } from './base.event.js';
import { EVENT_TYPES } from '../constants/event.constants.js';

export interface UserRegisteredPayload {
  email: string;
  firstName?: string;
  lastName?: string;
}

export class UserRegisteredEvent extends BaseDomainEvent<UserRegisteredPayload> {
  constructor(data: Omit<BaseDomainEvent<UserRegisteredPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'User Registered',
      eventType: EVENT_TYPES.USER_REGISTERED,
    });
  }
}

export interface RoleAssignedPayload {
  roleId: string;
  roleName: string;
  targetUserId: string;
}

export class RoleAssignedEvent extends BaseDomainEvent<RoleAssignedPayload> {
  constructor(data: Omit<BaseDomainEvent<RoleAssignedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'Role Assigned',
      eventType: EVENT_TYPES.ROLE_ASSIGNED,
    });
  }
}

export interface PermissionChangedPayload {
  roleId?: string;
  userId?: string;
  permissions: string[];
}

export class PermissionChangedEvent extends BaseDomainEvent<PermissionChangedPayload> {
  constructor(data: Omit<BaseDomainEvent<PermissionChangedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'Permission Changed',
      eventType: EVENT_TYPES.PERMISSION_CHANGED,
    });
  }
}

export interface LeadCreatedPayload {
  leadId: string;
  name: string;
  email: string;
  company?: string;
}

export class LeadCreatedEvent extends BaseDomainEvent<LeadCreatedPayload> {
  constructor(data: Omit<BaseDomainEvent<LeadCreatedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'Lead Created',
      eventType: EVENT_TYPES.LEAD_CREATED,
    });
  }
}
