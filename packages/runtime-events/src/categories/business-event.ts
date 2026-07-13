import { EventId } from '../identity/event-id.js';

export interface BusinessEvent {
  readonly businessEventId: string;
  readonly eventId: EventId;
  readonly businessProcessInstanceId: string; // Refers to high-level process
  readonly organizationUnitId: string;
  readonly initiatorRoleId: string;
  readonly monetaryValueAmount?: number;
  readonly currencyCode?: string;
  readonly businessMilestoneName: string;
}
