import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface TaskCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: TaskInstanceId;
  readonly taskId: string;
  readonly payload: Record<string, any>;
  readonly timestamp: Date;
}
