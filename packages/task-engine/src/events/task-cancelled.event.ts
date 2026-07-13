import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface TaskCancelledEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: TaskInstanceId;
  readonly cancelledByRoleId: string;
  readonly reason: string;
  readonly timestamp: Date;
}
