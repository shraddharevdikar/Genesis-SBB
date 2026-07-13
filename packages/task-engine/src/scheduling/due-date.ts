import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface DueDate {
  readonly dueDateId: string;
  readonly instanceId: TaskInstanceId;
  readonly targetDate: Date;
  readonly gracePeriodMinutes: number;
  readonly lastCalculatedAt: Date;
  readonly isOverridden: boolean;
}
