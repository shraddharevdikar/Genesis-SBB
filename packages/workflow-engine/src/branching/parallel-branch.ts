import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface ParallelBranch {
  readonly forkStepId: WorkflowStepId;
  readonly joinStepId: WorkflowStepId;
  readonly parallelStepPaths: WorkflowStepId[][];
  readonly requireAllToComplete: boolean;
}
