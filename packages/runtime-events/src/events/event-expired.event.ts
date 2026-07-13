import { EventInstanceId } from '../identity/event-instance-id.js';
import { CorrelationId } from '../identity/correlation-id.js';

export interface EventExpiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: EventInstanceId;
  readonly correlationId: CorrelationId;
  readonly expirationTime: Date;
  readonly reason: 'TTL_EXCEEDED' | 'RETENTION_MAX_AGE';
  readonly timestamp: Date;
}
