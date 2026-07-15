import { WorkflowService } from '@sbb/runtime-api';
import { RuntimeContext } from '../core/runtime-context.js';
import { ExecutionStep } from '../planning/execution-step.js';
import { ExecutionResult } from '../execution/execution-result.js';

export interface WorkflowCoordinator {
  readonly workflowService: WorkflowService;
  
  /**
   * Safe execution proxy triggering state-machine transitions in SBB Workflow Engine.
   */
  coordinateWorkflowStep(
    tenantId: string,
    context: RuntimeContext,
    step: ExecutionStep
  ): Promise<ExecutionResult>;
}
