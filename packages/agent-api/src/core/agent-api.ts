import { ApiContext } from './api-context.js';
import { ApiSession } from './api-session.js';
import { CommandContract } from '../contracts/command-contract.js';
import { QueryContract } from '../contracts/query-contract.js';
import { EventContract } from '../contracts/event-contract.js';
import { ResponseContract } from '../contracts/response-contract.js';
import { ExternalSystemContract } from '../integration/external-system-contract.js';
import { ApiVersion } from '../versioning/api-version.js';

export interface AgentAPI {
  /**
   * Executes a business capability command inside SBB Enterprise AI platform.
   */
  executeCommand(
    command: CommandContract,
    context: ApiContext
  ): Promise<ResponseContract>;

  /**
   * Queries existing operational metrics, logs, or listings.
   */
  executeQuery(
    query: QueryContract,
    context: ApiContext
  ): Promise<ResponseContract>;

  /**
   * Publishes external system events into the platform.
   */
  publishEvent(
    event: EventContract,
    context: ApiContext
  ): Promise<void>;

  /**
   * Registers a new third-party client system or enterprise adapter integration.
   */
  registerIntegration(
    integration: ExternalSystemContract,
    context: ApiContext
  ): Promise<ApiSession>;

  /**
   * Verifies that the request parameters match current schema definitions.
   */
  validateRequest(
    payloadJson: string,
    schemaJson: string,
    context: ApiContext
  ): Promise<{ readonly isValid: boolean; readonly detectedViolationsList: string[] }>;

  /**
   * Selects or downgrades a communication session version based on client support level.
   */
  negotiateVersion(
    requestedVersion: ApiVersion,
    context: ApiContext
  ): Promise<{ readonly negotiatedVersion: ApiVersion; readonly isSupported: boolean }>;
}
