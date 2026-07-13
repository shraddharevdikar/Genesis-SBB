import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface CompletionState {
  readonly instanceId: TaskInstanceId;
  readonly isFinalState: boolean;
  readonly outcome: 'SUCCESS' | 'CANCELLED' | 'BREACHED_FAIL' | 'REJECTED';
  readonly completedByRoleId: string;
  readonly resolutionComments?: string;
  readonly timestamp: Date;
}
