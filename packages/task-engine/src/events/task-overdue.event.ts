import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface TaskOverdueEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: TaskInstanceId;
  readonly dueByAt: Date;
  readonly delayDurationMinutes: number;
  readonly timestamp: Date;
}
