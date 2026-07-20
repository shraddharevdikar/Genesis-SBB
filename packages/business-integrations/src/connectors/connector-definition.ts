import { ConnectorId } from '../identity/connector-id.js';
import { ConnectorCapability } from './connector-capability.js';
import { ConnectorConfiguration } from './connector-configuration.js';

export type ConnectorCategoryCode =
  | 'CRM_SYSTEM'
  | 'ERP_SYSTEM'
  | 'FINANCE_SYSTEM'
  | 'HR_SYSTEM'
  | 'COMMUNICATION_SYSTEM'
  | 'AI_PROVIDER_SYSTEM'
  | 'PRODUCTIVITY_SYSTEM';

export interface ConnectorDefinition {
  readonly connectorId: ConnectorId;
  readonly uniqueConnectorCode: string; // e.g. "CON-SFC-CRM" or "CON-GEM-AI"
  readonly displayName: string;
  readonly categoryCode: ConnectorCategoryCode;
  readonly capabilitiesList: ConnectorCapability[];
  readonly defaultConfiguration: ConnectorConfiguration;
  readonly providerVendorName: string;
  readonly isMultiTenantSupported: boolean;
  readonly isDeprecated: boolean;
}
