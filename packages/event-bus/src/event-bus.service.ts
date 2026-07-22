import { Injectable, Logger } from '@nestjs/common';
import { EventPublisherService } from './event-publisher.service.js';
import { EventSubscriberService, IRegisteredSubscriber } from './event-subscriber.service.js';
import { EventDispatcherService } from './event-dispatcher.service.js';
import { EventStoreService } from './event-store.service.js';
import { IDomainEvent } from './interfaces/domain-event.interface.js';

@Injectable()
export class EventBusService {
  private readonly logger = new Logger(EventBusService.name);

  constructor(
    private readonly publisher: EventPublisherService,
    private readonly subscriber: EventSubscriberService,
    private readonly dispatcher: EventDispatcherService,
    private readonly storeService: EventStoreService
  ) {}

  /**
   * Publishes a single domain event.
   */
  async publish(event: IDomainEvent): Promise<void> {
    return this.publisher.publish(event);
  }

  /**
   * Bulk publishes multiple domain events in sequence.
   */
  async publishMany(events: IDomainEvent[]): Promise<void> {
    return this.publisher.publishMany(events);
  }

  /**
   * Schedules an event for future publication.
   */
  schedule(event: IDomainEvent, delayMs: number): void {
    return this.publisher.schedule(event, delayMs);
  }

  /**
   * Replays matching historical events within multi-tenant boundaries.
   */
  async replay(
    filters: {
      tenantId?: string | null;
      organizationId?: string | null;
      userId?: string | null;
      eventType?: string | null;
      correlationId?: string | null;
      startDate?: Date | null;
      endDate?: Date | null;
    },
    activeTenantId?: string
  ): Promise<number> {
    return this.publisher.replay(filters, activeTenantId);
  }

  /**
   * Subscribes a handler to an event pattern.
   */
  subscribe(
    eventType: string,
    handler: (event: any) => Promise<void> | void,
    options: { priority?: number; async?: boolean; subscriberName?: string } = {}
  ): () => void {
    return this.subscriber.subscribe(eventType, handler, options);
  }

  /**
   * Unsubscribes a handler subscription.
   */
  unsubscribe(subscriber: IRegisteredSubscriber): void {
    return this.subscriber.unsubscribe(subscriber);
  }

  /**
   * Unsubscribes by handler pattern.
   */
  unsubscribeHandler(eventType: string, handler: (event: any) => Promise<void> | void): void {
    return this.subscriber.unsubscribeHandler(eventType, handler);
  }

  /**
   * Subscribes a handler to execute exactly once.
   */
  once(
    eventType: string,
    handler: (event: any) => Promise<void> | void,
    options: { priority?: number; async?: boolean; subscriberName?: string } = {}
  ): void {
    return this.subscriber.once(eventType, handler, options);
  }

  /**
   * Retries failed events in the ledger that haven't exhausted their attempts.
   */
  async retryFailedEvents(maxAttempts: number = 3): Promise<number> {
    const failedEvents = await this.storeService.getEventsEligibleForRetry(maxAttempts);
    this.logger.log(`Found ${failedEvents.length} failed events eligible for retry`);

    for (const rawEvent of failedEvents) {
      const domainEvent: IDomainEvent = {
        id: rawEvent.id,
        eventName: rawEvent.eventName,
        eventType: rawEvent.eventType,
        tenantId: rawEvent.tenantId,
        organizationId: rawEvent.organizationId,
        userId: rawEvent.userId,
        correlationId: rawEvent.correlationId,
        causationId: rawEvent.causationId,
        timestamp: rawEvent.timestamp,
        version: rawEvent.version,
        source: rawEvent.source,
        payload: rawEvent.payload,
        metadata: rawEvent.metadata,
      };

      await this.dispatcher.dispatch(domainEvent);
    }

    return failedEvents.length;
  }

  /**
   * Fetches observability metrics.
   */
  getMetrics() {
    return this.dispatcher.getMetrics();
  }
}
