import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface BlockingCondition {
  readonly conditionId: string;
  readonly instanceId: TaskInstanceId;
  readonly isBlocked: boolean;
  readonly blockReason: string;
  readonly blockedByTaskId?: string;
  readonly createdAt: Date;
  readonly clearedAt?: Date;
}
