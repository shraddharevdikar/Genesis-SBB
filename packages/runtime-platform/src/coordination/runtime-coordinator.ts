import { ExecutionRequest } from '../execution/execution-request.js';
import { ExecutionResult } from '../execution/execution-result.js';
import { RuntimeContext } from '../core/runtime-context.js';

export interface RuntimeCoordinator {
  /**
   * Registers, parses, and arranges execution triggers based on priority schedules.
   */
  coordinate(
    context: RuntimeContext,
    request: ExecutionRequest
  ): Promise<ExecutionResult>;

  /**
   * Terminates or cancels a running runtime operations thread.
   */
  abortExecution(
    context: RuntimeContext,
    executionId: string,
    reason: string
  ): Promise<boolean>;
}
