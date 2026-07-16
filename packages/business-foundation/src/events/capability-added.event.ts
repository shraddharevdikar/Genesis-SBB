import { BusinessId } from '../identity/business-id.js';

export interface CapabilityAddedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly businessId: BusinessId;
  readonly capabilityCode: string;
  readonly displayName: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
