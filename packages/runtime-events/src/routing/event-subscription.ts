import { EventId } from '../identity/event-id.js';

export interface EventSubscription {
  readonly subscriptionId: string;
  readonly tenantId: string;
  readonly eventId: EventId;
  readonly subscriberId: string;
  readonly routingTopic: string;
  readonly ackDeadlineSeconds: number;
  readonly deliveryMode: 'PUSH' | 'PULL';
  readonly maxConcurrentMessages: number;
  readonly filterCriteria?: Record<string, string[]>;
  readonly isActive: boolean;
}
