import { EventInstanceId } from '../identity/event-instance-id.js';
import { EventId } from '../identity/event-id.js';

export type EventStatus = 'DRAFT' | 'PUBLISHED' | 'ROUTED' | 'CONSUMED' | 'FAILED' | 'EXPIRED';

export interface EventInstance {
  readonly instanceId: EventInstanceId;
  readonly eventId: EventId;
  readonly tenantId: string;
  readonly status: EventStatus;
  readonly routingTopic: string;
  readonly occurrenceTime: Date;
  readonly publishedAt?: Date;
  readonly payload: Record<string, any>;
  readonly sizeBytes: number;
}
