import { EndpointId } from '../identity/endpoint-id.js';

export interface IntegrationRequest {
  readonly requestId: string;
  readonly targetEndpointId: EndpointId;
  readonly payloadDataJSON: string;
  readonly headersMap: Record<string, string>;
  readonly queryParametersMap: Record<string, string>;
  readonly idempotencyKeyString?: string;
  readonly timestamp: Date;
}
