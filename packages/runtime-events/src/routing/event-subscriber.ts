import { EventId } from '../identity/event-id.js';

export interface EventSubscriber {
  readonly subscriberId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly callbackEndpointUrl?: string; // Target push endpoint if push mode
  readonly subscribedToEventIds: EventId[];
  readonly retryBehaviorOnFailure: 'RETRY_WITH_BACKOFF' | 'DEAD_LETTER_QUEUE' | 'STOP_SUBSCRIPTION';
  readonly maxConcurrency: number;
}
