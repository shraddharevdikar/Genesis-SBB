import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface TaskSla {
  readonly slaId: string;
  readonly instanceId: TaskInstanceId;
  readonly tenantId: string;
  readonly responseThresholdMinutes: number;
  readonly completionThresholdMinutes: number;
  readonly breachedResponseAt?: Date;
  readonly breachedCompletionAt?: Date;
  readonly isBreached: boolean;
}
