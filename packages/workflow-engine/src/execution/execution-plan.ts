import { WorkflowId } from '../identity/workflow-id.js';
import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface ExecutionPlan {
  readonly planId: string;
  readonly workflowId: WorkflowId;
  readonly tenantId: string;
  readonly orderedSteps: WorkflowStepId[][]; // nested arrays for parallel sequences
  readonly estimatedDurationMs: number;
  readonly isOptimizedForRuntime: boolean;
  readonly generatedAt: Date;
}
