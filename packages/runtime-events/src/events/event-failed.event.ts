import { EventInstanceId } from '../identity/event-instance-id.js';
import { CorrelationId } from '../identity/correlation-id.js';

export interface EventFailedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: EventInstanceId;
  readonly correlationId: CorrelationId;
  readonly subscriberId?: string; // Empty if failure happened during routing, set if during subscriber processing
  readonly errorCode: string; // e.g. "SCHEMA_VALIDATION_FAILED", "ROUTING_UNRESOLVED", "SUBSCRIBER_TIMEOUT"
  readonly errorMessage: string;
  readonly retryAttemptCount: number;
  readonly isSentToDeadLetterQueue: boolean;
  readonly timestamp: Date;
}
