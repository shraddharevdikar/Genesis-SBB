import { WorkflowInstanceId } from '../identity/workflow-instance-id.js';
import { WorkflowStepId } from '../identity/workflow-step-id.js';

export type ExecutionStateCode =
  | 'PENDING_START'
  | 'ACTIVE_RUNNING'
  | 'WAITING_ON_APPROVAL'
  | 'SUSPENDED_PAUSED'
  | 'COMPLETED_SUCCESSFULLY'
  | 'FAILED_HALTED'
  | 'ROLLING_BACK_COMPENSATING'
  | 'COMPENSATED_ABORTED';

export interface ExecutionState {
  readonly instanceId: WorkflowInstanceId;
  readonly currentStateCode: ExecutionStateCode;
  readonly currentActiveStepIdsList: WorkflowStepId[];
  readonly executedStepHistoryIdsList: WorkflowStepId[];
  readonly stateVariablesPayloadJsonString: string; // state payload dictionary
  readonly faultErrorMessage?: string;
  readonly compensationSucceeded: boolean;
  readonly startedAt: Date;
  readonly endedAt?: Date;
}
