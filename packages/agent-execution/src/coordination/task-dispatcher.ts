import { ExecutionContext } from '../core/execution-context.js';
import { ExecutionStepRecord } from '../steps/execution-step.js';

export interface TaskDispatcher {
  /**
   * Assigns and dispatches a single step block to a target Digital Employee's queue.
   */
  dispatchTask(
    tenantId: string,
    executionId: string,
    stepRecord: ExecutionStepRecord,
    context: ExecutionContext
  ): Promise<{
    readonly taskId: string;
    readonly status: 'QUEUED' | 'ACTIVE' | 'FAILED';
  }>;

  /**
   * Cancels a dispatched task currently inside an agent's workspace queue.
   */
  cancelTask(
    tenantId: string,
    taskId: string,
    context: ExecutionContext
  ): Promise<void>;
}
