import { EventId } from '../identity/event-id.js';

export interface EventRetention {
  readonly retentionId: string;
  readonly tenantId: string;
  readonly eventId?: EventId; // If specific override, otherwise global tenant policy
  readonly dynamicRetentionDays: number; // Duration to keep raw payload in hot storage
  readonly archiveBeforePruning: boolean;
  readonly keepFailedEventsForever: boolean;
  readonly compressionEnabled: boolean;
}
