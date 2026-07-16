import { ApiRequestId } from '../identity/api-request-id.js';

export interface ApiRequestedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly requestId: ApiRequestId;
  readonly clientApplicationCode: string;
  readonly requestTypeCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
