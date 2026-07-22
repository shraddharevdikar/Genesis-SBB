import { Injectable } from '@nestjs/common';
import { DatabaseService } from '@sbb/database';
import { IDomainEvent } from '../interfaces/domain-event.interface.js';

@Injectable()
export class EventStoreRepository {
  constructor(private readonly db: DatabaseService) {}

  /**
   * Persists an event into the Event Store.
   */
  async save(event: IDomainEvent, status: string = 'PENDING', attempts: number = 0, errorMessage: string | null = null) {
    return this.db.eventStore.create({
      data: {
        id: event.id,
        eventName: event.eventName,
        eventType: event.eventType,
        tenantId: event.tenantId || null,
        organizationId: event.organizationId || null,
        userId: event.userId || null,
        correlationId: event.correlationId || null,
        causationId: event.causationId || null,
        timestamp: event.timestamp || new Date(),
        version: event.version || 1,
        source: event.source,
        payload: event.payload as any,
        metadata: (event.metadata || {}) as any,
        status,
        attempts,
        errorMessage,
      },
    });
  }

  /**
   * Updates processing status and failure trace on a stored event.
   */
  async updateStatus(id: string, status: string, attempts: number, errorMessage: string | null = null) {
    return this.db.eventStore.update({
      where: { id },
      data: {
        status,
        attempts,
        errorMessage,
      },
    });
  }

  /**
   * Finds stored events by various query criteria (e.g. for replay or audit trail).
   */
  async findByCriteria(filters: {
    tenantId?: string | null;
    organizationId?: string | null;
    userId?: string | null;
    eventType?: string | null;
    correlationId?: string | null;
    startDate?: Date | null;
    endDate?: Date | null;
    status?: string | null;
  }) {
    const where: any = {};

    if (filters.tenantId !== undefined) where.tenantId = filters.tenantId;
    if (filters.organizationId !== undefined) where.organizationId = filters.organizationId;
    if (filters.userId !== undefined) where.userId = filters.userId;
    if (filters.eventType) where.eventType = filters.eventType;
    if (filters.correlationId) where.correlationId = filters.correlationId;
    if (filters.status) where.status = filters.status;

    if (filters.startDate || filters.endDate) {
      where.timestamp = {};
      if (filters.startDate) where.timestamp.gte = filters.startDate;
      if (filters.endDate) where.timestamp.lte = filters.endDate;
    }

    return this.db.eventStore.findMany({
      where,
      orderBy: { timestamp: 'asc' },
    });
  }

  /**
   * Retrieves an event by ID.
   */
  async findById(id: string) {
    return this.db.eventStore.findUnique({
      where: { id },
    });
  }

  /**
   * Retrieves all failed events that can be retried or are stuck.
   */
  async getEventsForRetry(maxAttempts: number = 3) {
    return this.db.eventStore.findMany({
      where: {
        status: 'FAILED',
        attempts: {
          lt: maxAttempts,
        },
      },
      orderBy: { timestamp: 'asc' },
    });
  }
}
