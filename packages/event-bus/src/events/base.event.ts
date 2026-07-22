import { IDomainEvent } from '../interfaces/domain-event.interface.js';

export class BaseDomainEvent<P = any, M = any> implements IDomainEvent<P, M> {
  id: string;
  eventName: string;
  eventType: string;
  tenantId?: string | null;
  organizationId?: string | null;
  userId?: string | null;
  correlationId?: string | null;
  causationId?: string | null;
  timestamp: Date;
  version: number;
  source: string;
  payload: P;
  metadata?: M | null;

  constructor(data: Omit<IDomainEvent<P, M>, 'id' | 'timestamp' | 'version'> & {
    id?: string;
    timestamp?: Date;
    version?: number;
  }) {
    this.id = data.id || `evt-${Math.random().toString(36).substring(2, 15)}`;
    this.eventName = data.eventName;
    this.eventType = data.eventType;
    this.tenantId = data.tenantId || null;
    this.organizationId = data.organizationId || null;
    this.userId = data.userId || null;
    this.correlationId = data.correlationId || null;
    this.causationId = data.causationId || null;
    this.timestamp = data.timestamp || new Date();
    this.version = data.version || 1;
    this.source = data.source;
    this.payload = data.payload;
    this.metadata = data.metadata || null;
  }
}
