import { IntegrationId } from '../identity/integration-id.js';

export interface IntegrationDisconnectedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly integrationId: IntegrationId;
  readonly uniqueScopeCode: string;
  readonly reasonNotesText?: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
