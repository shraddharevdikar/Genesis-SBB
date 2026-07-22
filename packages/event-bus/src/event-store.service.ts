import { Injectable, Logger } from '@nestjs/common';
import { EventStoreRepository } from './repositories/event-store.repository.js';
import { IDomainEvent } from './interfaces/domain-event.interface.js';

@Injectable()
export class EventStoreService {
  private readonly logger = new Logger(EventStoreService.name);

  constructor(private readonly repo: EventStoreRepository) {}

  /**
   * Append an event to the immutable ledger.
   */
  async append(event: IDomainEvent, status: string = 'PENDING', attempts: number = 0, errorMessage: string | null = null) {
    this.logger.debug(`Appending event ${event.id} [${event.eventType}] to store`);
    return this.repo.save(event, status, attempts, errorMessage);
  }

  /**
   * Update the status of an event after delivery attempt.
   */
  async updateEventStatus(id: string, status: string, attempts: number, errorMessage: string | null = null) {
    this.logger.debug(`Updating event ${id} status to ${status} (Attempt ${attempts})`);
    return this.repo.updateStatus(id, status, attempts, errorMessage);
  }

  /**
   * Fetch events matching criteria for replay.
   * Multi-tenant boundary checks must be enforced in the caller/service layer!
   */
  async getEvents(filters: {
    tenantId?: string | null;
    organizationId?: string | null;
    userId?: string | null;
    eventType?: string | null;
    correlationId?: string | null;
    startDate?: Date | null;
    endDate?: Date | null;
    status?: string | null;
  }) {
    return this.repo.findByCriteria(filters);
  }

  /**
   * Retrieve an event by ID.
   */
  async getEventById(id: string) {
    return this.repo.findById(id);
  }

  /**
   * Fetch failed events eligible for retry.
   */
  async getEventsEligibleForRetry(maxAttempts: number = 3) {
    return this.repo.getEventsForRetry(maxAttempts);
  }
}
