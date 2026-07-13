import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface TaskStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: TaskInstanceId;
  readonly startedByRoleId: string;
  readonly timestamp: Date;
}
