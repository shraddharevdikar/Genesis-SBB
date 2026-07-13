import { TaskInstanceId } from '../identity/task-instance-id.js';
import { TaskId } from '../identity/task-id.js';
import { TaskStatus } from '../status/task-status.js';

export interface TaskInstance {
  readonly instanceId: TaskInstanceId;
  readonly taskId: TaskId;
  readonly tenantId: string;
  readonly status: TaskStatus;
  readonly assigneeId?: string;
  readonly assigneeType?: 'INDIVIDUAL' | 'ROLE' | 'TEAM' | 'DEPARTMENT' | 'AI_AGENT';
  readonly currentProgressPercentage: number;
  readonly startedAt?: Date;
  readonly completedAt?: Date;
  readonly dueByAt?: Date;
}
