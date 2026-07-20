import { IntegrationId } from '../identity/integration-id.js';

export interface IntegrationContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly activeOperatorRoleId: string;
  readonly activeIntegrationId?: IntegrationId;
  readonly localeCode: string; // e.g. "de-CH", "en-US"
  readonly executionTimezone: string; // e.g. "Europe/Zurich"
  readonly timestamp: Date;
}
