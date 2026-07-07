import { EventMetadata } from './event-metadata.js';

export interface DomainEvent {
  readonly eventId: string;
  readonly eventType: string;
  readonly occurredAt: Date;
  readonly aggregateId: string;
  readonly aggregateType: string;
  readonly version: number;
  readonly metadata?: EventMetadata;
}
