import { RuntimeContext } from '../core/runtime-context.js';
import { ExecutionRequest } from '../execution/execution-request.js';
import { ExecutionResult } from '../execution/execution-result.js';

export interface RuntimeOrchestrator {
  /**
   * Orchestrates complex distributed multi-step pipeline actions.
   */
  orchestrateSequence(
    context: RuntimeContext,
    requests: ExecutionRequest[]
  ): Promise<ExecutionResult[]>;

  /**
   * Rolls back an orchestration sequence or clean up failed pipeline elements.
   */
  compensateSequence(
    context: RuntimeContext,
    sequenceId: string,
    completedResults: ExecutionResult[]
  ): Promise<boolean>;
}
