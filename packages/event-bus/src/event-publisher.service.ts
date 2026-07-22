import { Injectable, Logger, ForbiddenException } from '@nestjs/common';
import { EventStoreService } from './event-store.service.js';
import { EventDispatcherService } from './event-dispatcher.service.js';
import { IDomainEvent } from './interfaces/domain-event.interface.js';

@Injectable()
export class EventPublisherService {
  private readonly logger = new Logger(EventPublisherService.name);

  constructor(
    private readonly storeService: EventStoreService,
    private readonly dispatcherService: EventDispatcherService
  ) {}

  /**
   * Publishes a single domain event: appends to immutable ledger and dispatches immediately.
   */
  async publish(event: IDomainEvent): Promise<void> {
    this.logger.debug(`Publishing event ${event.id} [${event.eventType}]`);
    // Append to Event Store first (PENDING status)
    await this.storeService.append(event, 'PENDING');
    
    // Dispatch to subscribers
    await this.dispatcherService.dispatch(event);
  }

  /**
   * Publishes multiple events in sequence.
   */
  async publishMany(events: IDomainEvent[]): Promise<void> {
    this.logger.debug(`Bulk publishing ${events.length} events`);
    for (const event of events) {
      await this.publish(event);
    }
  }

  /**
   * Schedules an event for future publication after a delay.
   */
  schedule(event: IDomainEvent, delayMs: number): void {
    this.logger.debug(`Scheduling event ${event.id} [${event.eventType}] in ${delayMs}ms`);
    setTimeout(async () => {
      try {
        await this.publish(event);
      } catch (err: any) {
        this.logger.error(`Scheduled publication failed for event ${event.id}: ${err.message}`);
      }
    }, delayMs);
  }

  /**
   * Replays historical events matching search criteria.
   * Multi-Tenant Isolation Guard: Restricts replay within authenticated tenant boundaries.
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
    let queryTenantId = filters.tenantId;

    if (activeTenantId) {
      if (queryTenantId && queryTenantId !== activeTenantId) {
        throw new ForbiddenException('Cross-tenant event replay is strictly forbidden.');
      }
      queryTenantId = activeTenantId;
    }

    const events = await this.storeService.getEvents({
      ...filters,
      tenantId: queryTenantId,
    });

    this.logger.log(`Replaying ${events.length} historical events inside tenant constraint: ${queryTenantId || 'SYSTEM'}`);

    for (const rawEvent of events) {
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

      // Dispatch directly to subscribers
      await this.dispatcherService.dispatch(domainEvent, { forceAsync: true });
    }

    return events.length;
  }
}
