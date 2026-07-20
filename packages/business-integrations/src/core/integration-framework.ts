import { IntegrationId } from '../identity/integration-id.js';
import { ConnectorId } from '../identity/connector-id.js';
import { IntegrationContext } from './integration-context.js';
import { BusinessIntegration } from '../integrations/business-integration.js';
import { ConnectorDefinition } from '../connectors/connector-definition.js';
import { RequestContract } from '../contracts/request-contract.js';
import { ObjectMapping } from '../mapping/object-mapping.js';

export interface IntegrationFramework {
  /**
   * Registers a new Business Integration scope within a tenant space.
   */
  registerIntegration(
    uniqueScopeCode: string,
    displayName: string,
    descriptionText: string,
    targetConnectorId: ConnectorId,
    context: IntegrationContext
  ): Promise<BusinessIntegration>;

  /**
   * Defines or catalogs an integration connector with its core capabilities.
   */
  registerConnector(
    uniqueConnectorCode: string,
    displayName: string,
    categoryCode: string,
    context: IntegrationContext
  ): Promise<ConnectorDefinition>;

  /**
   * Establishes a schema validation contract for incoming or outgoing datasets.
   */
  defineContract(
    uniqueContractCode: string,
    schemaName: string,
    rawSchemaJSON: string,
    schemaVersion: string,
    context: IntegrationContext
  ): Promise<RequestContract>;

  /**
   * Declares field-to-field and object-to-object structural mapping rules.
   */
  defineMapping(
    uniqueMappingCode: string,
    sourceSchemaURI: string,
    targetSchemaURI: string,
    mappings: ObjectMapping,
    context: IntegrationContext
  ): Promise<ObjectMapping>;

  /**
   * Transitions an integration into CONNECTED_ACTIVE state, enabling pipelines.
   */
  connectIntegration(
    integrationId: IntegrationId,
    context: IntegrationContext
  ): Promise<void>;

  /**
   * Pauses data pipelines and transitions an integration into DISCONNECTED state.
   */
  disconnectIntegration(
    integrationId: IntegrationId,
    context: IntegrationContext
  ): Promise<void>;

  /**
   * Sunsets or decommissions active integration configurations.
   */
  retireIntegration(
    integrationId: IntegrationId,
    context: IntegrationContext
  ): Promise<void>;
}
