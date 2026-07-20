import { IntegrationId } from '../identity/integration-id.js';

export interface IntegrationCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly integrationId: IntegrationId;
  readonly uniqueScopeCode: string;
  readonly displayName: string;
  readonly targetConnectorIdString: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
