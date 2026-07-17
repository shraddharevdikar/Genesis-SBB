import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface RetryStrategy {
  readonly maximumRetryAttemptsCount: number;
  readonly initialBackoffDelaySeconds: number;
  readonly useExponentialBackoffExponent: boolean;
}

export interface CompensationAction {
  readonly associatedStepId: WorkflowStepId;
  readonly compensatingActionStepId: WorkflowStepId;
  readonly automaticCompensationTriggerEnabled: boolean;
}

export interface ExecutionPlan {
  readonly planId: string;
  readonly targetWorkflowIdString: string;
  readonly defaultRetryStrategy: RetryStrategy;
  readonly stepsRetryStrategiesList: { readonly stepId: WorkflowStepId; readonly strategy: RetryStrategy }[];
  readonly compensationActionsList: CompensationAction[];
  readonly allowConcurrentPlayerPaths: boolean;
  readonly maxConcurrentStepCountLimit: number;
}
