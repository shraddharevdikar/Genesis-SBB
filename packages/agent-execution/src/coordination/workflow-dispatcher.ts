import { ExecutionContext } from '../core/execution-context.js';

export interface WorkflowDispatcher {
  /**
   * Dispatches the master workflow template instructions to the underlying execution systems.
   */
  dispatchWorkflow(
    tenantId: string,
    executionId: string,
    workflowDefinitionUri: string,
    context: ExecutionContext
  ): Promise<{
    readonly externalWorkflowId: string;
    readonly dispatchedAt: Date;
  }>;

  /**
   * Pauses an active external workflow execution block.
   */
  pauseWorkflow(
    tenantId: string,
    externalWorkflowId: string,
    context: ExecutionContext
  ): Promise<void>;
}
