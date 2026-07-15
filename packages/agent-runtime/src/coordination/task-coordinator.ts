import { TaskService } from '@sbb/runtime-api';
import { RuntimeContext } from '../core/runtime-context.js';
import { ExecutionStep } from '../planning/execution-step.js';
import { ExecutionResult } from '../execution/execution-result.js';

export interface TaskCoordinator {
  readonly taskService: TaskService;

  /**
   * Safe execution proxy to enqueue high priority tasks on target asynchronous message buffers.
   */
  coordinateTaskStep(
    tenantId: string,
    context: RuntimeContext,
    step: ExecutionStep
  ): Promise<ExecutionResult>;
}
