import { IntegrationId } from '../identity/integration-id.js';

export interface IntegrationRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredIntegrationId: IntegrationId;
  readonly uniqueScopeCode: string;
  readonly retiredByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
