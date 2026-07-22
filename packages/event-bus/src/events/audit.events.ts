import { BaseDomainEvent } from './base.event.js';
import { EVENT_TYPES } from '../constants/event.constants.js';

export interface AuditCreatedPayload {
  logId: string;
  actorId: string;
  entity: string;
  entityId: string;
  action: string;
  status: string;
  severity: string;
}

export class AuditCreatedEvent extends BaseDomainEvent<AuditCreatedPayload> {
  constructor(data: Omit<BaseDomainEvent<AuditCreatedPayload>, 'id' | 'timestamp' | 'version' | 'eventType' | 'eventName'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    super({
      ...data,
      eventName: 'Audit Created',
      eventType: EVENT_TYPES.AUDIT_CREATED,
    });
  }
}
