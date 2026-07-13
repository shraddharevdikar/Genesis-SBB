import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface ProgressState {
  readonly instanceId: TaskInstanceId;
  readonly percentDone: number; // e.g. 0 to 100
  readonly notes?: string;
  readonly lastReportedAt: Date;
  readonly reportedByRoleId: string;
}
