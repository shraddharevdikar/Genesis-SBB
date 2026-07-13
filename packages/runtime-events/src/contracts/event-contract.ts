import { EventId } from '../identity/event-id.js';

export interface EventContract {
  readonly contractId: string;
  readonly eventId: EventId;
  readonly tenantId: string;
  readonly currentActiveVersion: string;
  readonly compatibilityMode: 'BACKWARD' | 'FORWARD' | 'FULL' | 'NONE';
  readonly isDeprecationScheduled: boolean;
  readonly deprecationEffectiveDate?: Date;
}
