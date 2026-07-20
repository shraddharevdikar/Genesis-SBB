import { BusinessTemplate } from './business-template.js';

export interface IntegrationTemplate extends BusinessTemplate {
  readonly standardProtocolTypeCode: string; // e.g. "REST_JSON" or "EVENT_STREAMING_KAFKA"
  readonly defaultAuthenticationMethodCode: string;
  readonly defaultPayloadMappingJSON: string;
}
