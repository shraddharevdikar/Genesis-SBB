import { BusinessId } from '../identity/business-id.js';

export interface BusinessRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly businessId: BusinessId;
  readonly reasonNotes?: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
