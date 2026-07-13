import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface TaskCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: TaskInstanceId;
  readonly completedByRoleId: string;
  readonly outputPayload: Record<string, any>;
  readonly timestamp: Date;
}
