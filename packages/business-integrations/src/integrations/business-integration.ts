import { IntegrationId } from '../identity/integration-id.js';
import { ConnectorId } from '../identity/connector-id.js';
import { IntegrationVersion } from '../core/integration-version.js';
import { IntegrationLifecycle } from '../core/integration-lifecycle.js';
import { AuthenticationProfile } from '../adapters/authentication-profile.js';
import { IntegrationOwner } from '../governance/integration-owner.js';
import { IntegrationSecurity } from '../governance/integration-security.js';

export interface BusinessIntegration {
  readonly integrationId: IntegrationId;
  readonly tenantId: string;
  readonly uniqueScopeCode: string; // e.g. "INT-CRM-SALESFORCE"
  readonly displayName: string;
  readonly descriptionText: string;
  readonly targetConnectorId: ConnectorId;
  readonly authenticationProfile: AuthenticationProfile;
  readonly securityProfile: IntegrationSecurity;
  readonly owner: IntegrationOwner;
  readonly version: IntegrationVersion;
  readonly lifecycle: IntegrationLifecycle;
}
