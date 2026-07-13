import { EventInstanceId } from '../identity/event-instance-id.js';
import { CorrelationId } from '../identity/correlation-id.js';

export interface EventPublishedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: EventInstanceId;
  readonly eventName: string;
  readonly category: 'BUSINESS' | 'DOMAIN' | 'INTEGRATION' | 'SYSTEM';
  readonly correlationId: CorrelationId;
  readonly sizeBytes: number;
  readonly timestamp: Date;
}
