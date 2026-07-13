import { TaskId } from '../identity/task-id.js';

export interface TaskHealth {
  readonly healthId: string;
  readonly taskId: TaskId;
  readonly tenantId: string;
  readonly activeCount: number;
  readonly blockedCount: number;
  readonly overdueCount: number;
  readonly failedCount: number;
  readonly calculatedAt: Date;
}
