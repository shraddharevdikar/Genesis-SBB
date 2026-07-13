import { EventInstanceId } from '../identity/event-instance-id.js';
import { CorrelationId } from '../identity/correlation-id.js';

export interface EventConsumedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: EventInstanceId;
  readonly subscriberId: string;
  readonly correlationId: CorrelationId;
  readonly processingDurationMs: number;
  readonly acknowledgedAt: Date;
  readonly timestamp: Date;
}
