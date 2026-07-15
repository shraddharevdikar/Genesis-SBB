import { ExecutionContext } from '../core/execution-context.js';

export interface RuntimeCoordinator {
  /**
   * Reserves or binds necessary host processes, VM containers, or agent runtime environments.
   */
  reserveRuntimeEnvironment(
    tenantId: string,
    executionId: string,
    context: ExecutionContext
  ): Promise<{
    readonly environmentId: string;
    readonly isAllocatedSuccessfully: boolean;
    readonly assignedNodesList: string[];
  }>;

  /**
   * Releases allocated system locks and agent nodes once execution terminates.
   */
  releaseRuntimeEnvironment(
    tenantId: string,
    environmentId: string,
    context: ExecutionContext
  ): Promise<void>;
}
