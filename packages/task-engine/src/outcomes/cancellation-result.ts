import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface CancellationResult {
  readonly resultId: string;
  readonly instanceId: TaskInstanceId;
  readonly cancelledAt: Date;
  readonly cancelledByRoleId: string;
  readonly reason: string;
  readonly compensationActionApplied: boolean;
}
