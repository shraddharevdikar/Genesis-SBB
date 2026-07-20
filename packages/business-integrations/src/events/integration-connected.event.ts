import { IntegrationId } from '../identity/integration-id.js';

export interface IntegrationConnectedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly integrationId: IntegrationId;
  readonly uniqueScopeCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
