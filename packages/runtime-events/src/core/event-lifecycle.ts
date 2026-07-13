import { EventInstanceId } from '../identity/event-instance-id.js';
import { EventStatus } from './event-instance.js';

export interface EventLifecycle {
  readonly instanceId: EventInstanceId;
  readonly tenantId: string;
  readonly allowedTransitions: Array<{
    readonly from: EventStatus;
    readonly to: EventStatus[];
  }>;
  readonly lastTransitionAt: Date;
  readonly isTerminal: boolean;
}
