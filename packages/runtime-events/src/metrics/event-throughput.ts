import { EventId } from '../identity/event-id.js';

export interface EventThroughput {
  readonly throughputId: string;
  readonly tenantId: string;
  readonly eventId?: EventId; // Optional specific filter, otherwise global tenant rate
  readonly eventsPublishedPerSecond: number;
  readonly averageTransitLatencyMs: number; // Publish time to routing consumption
  readonly peakEventsPerSecond: number;
  readonly totalBytesProcessed: number;
  readonly lastCalculatedAt: Date;
}
