import { RuntimeRequest } from './runtime-request.js';
import { RuntimeResponse } from './runtime-response.js';
import { RuntimeCommand } from '../contracts/runtime-command.js';
import { RuntimeQuery } from '../contracts/runtime-query.js';
import { RuntimeResult } from '../contracts/runtime-result.js';

export interface RuntimeAPI {
  /**
   * Executes a mutating command within the Runtime environment.
   */
  executeCommand(
    tenantId: string,
    command: RuntimeCommand
  ): Promise<RuntimeResult>;

  /**
   * Performs an idempotent read query against the Runtime catalogs or logs.
   */
  executeQuery(
    tenantId: string,
    query: RuntimeQuery
  ): Promise<RuntimeResult>;

  /**
   * Resolves a named capability or microservice interface from the internal SBB registry.
   */
  resolveService<T>(
    tenantId: string,
    serviceIdentifier: string
  ): Promise<T>;

  /**
   * Validates if an incoming request payload has a well-formed schema.
   */
  validateRequest(
    tenantId: string,
    request: RuntimeRequest
  ): Promise<{ isValid: boolean; issues: string[] }>;

  /**
   * Performs real-time authorization checks against multi-tenant policy frameworks.
   */
  authorizeRequest(
    tenantId: string,
    request: RuntimeRequest,
    requiredRole: string
  ): Promise<{ isAuthorized: boolean; reason?: string }>;

  /**
   * Publishes canonical enterprise request and execution metrics as domain events.
   */
  publishRuntimeEvent(
    tenantId: string,
    requestId: string,
    eventType: 'REQUESTED' | 'COMPLETED' | 'FAILED',
    payload: Record<string, any>
  ): Promise<void>;
}
