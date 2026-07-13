import { TaskInstanceId } from '../identity/task-instance-id.js';
import { TaskStatus } from '../status/task-status.js';

export interface TaskLifecycle {
  readonly instanceId: TaskInstanceId;
  readonly tenantId: string;
  readonly allowedTransitions: Array<{
    readonly from: TaskStatus;
    readonly to: TaskStatus[];
  }>;
  readonly autoEscalateOnStallMinutes?: number;
  readonly lockOwnerId?: string;
  readonly lockedAt?: Date;
}
