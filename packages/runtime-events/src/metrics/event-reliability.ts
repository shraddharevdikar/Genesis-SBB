import { EventId } from '../identity/event-id.js';

export interface EventReliability {
  readonly reliabilityId: string;
  readonly tenantId: string;
  readonly eventId?: EventId;
  readonly totalAttemptsCount: number;
  readonly successfulDeliveriesCount: number;
  readonly retriedDeliveriesCount: number;
  readonly deadLetteredCount: number;
  readonly expiredCount: number;
  readonly successRatePercentage: number;
  readonly failureRatePercentage: number;
  readonly lastCalculatedAt: Date;
}
