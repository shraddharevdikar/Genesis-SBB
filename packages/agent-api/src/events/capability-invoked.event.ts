import { ApiRequestId } from '../identity/api-request-id.js';

export interface CapabilityInvokedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly correlationRequestId: ApiRequestId;
  readonly capabilityNameString: string;
  readonly payloadBytesCount: number;
  readonly wasSuccessful: boolean;
  readonly durationMs: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
