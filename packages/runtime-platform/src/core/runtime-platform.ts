import { RuntimeId } from '../identity/runtime-id.js';
import { RuntimeSession } from './runtime-session.js';
import { RuntimeState } from './runtime-state.js';
import { ExecutionRequest } from '../execution/execution-request.js';
import { ExecutionResult } from '../execution/execution-result.js';
import { RuntimeHealth } from '../metrics/runtime-health.js';

export interface RuntimePlatform {
  /**
   * Spins up the execution container resources for the tenant.
   */
  startRuntime(
    tenantId: string,
    initiatedByRoleId: string
  ): Promise<RuntimeState>;

  /**
   * Gracefully tears down the execution containers and active connection pools.
   */
  stopRuntime(
    tenantId: string,
    runtimeId: RuntimeId,
    reason: string,
    initiatedByRoleId: string
  ): Promise<RuntimeState>;

  /**
   * Executes a direct query or command request.
   */
  execute(
    session: RuntimeSession,
    request: ExecutionRequest
  ): Promise<ExecutionResult>;

  /**
   * Coordinates multi-stage sequence routing or parallel executions.
   */
  coordinate(
    session: RuntimeSession,
    requests: ExecutionRequest[]
  ): Promise<ExecutionResult[]>;

  /**
   * Validates if the execution conforms to concurrent, secure, and resource limits.
   */
  validateExecution(
    session: RuntimeSession,
    request: ExecutionRequest
  ): Promise<boolean>;

  /**
   * Retrieves active capacity, load, thread state, and heartbeats.
   */
  monitorHealth(
    tenantId: string,
    runtimeId: RuntimeId
  ): Promise<RuntimeHealth>;
}
