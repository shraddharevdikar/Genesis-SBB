import { EventInstanceId } from '../identity/event-instance-id.js';
import { EventId } from '../identity/event-id.js';
import { CorrelationId } from '../identity/correlation-id.js';
import { CausationId } from '../identity/causation-id.js';

export interface EventContext {
  readonly instanceId: EventInstanceId;
  readonly eventId: EventId;
  readonly tenantId: string;
  readonly correlationId: CorrelationId;
  readonly causationId?: CausationId;
  readonly originService: string; // e.g. "WorkflowEngine"
  readonly userRoleId?: string;
  readonly traceFlags?: number;
  readonly baggage: Record<string, string>;
  readonly initializedAt: Date;
}
