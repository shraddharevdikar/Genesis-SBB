import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface TaskAudit {
  readonly auditId: string;
  readonly instanceId: TaskInstanceId;
  readonly tenantId: string;
  readonly actionPerfomed: 'TASK_CREATED' | 'TASK_ASSIGNED' | 'TASK_STARTED' | 'TASK_COMPLETED' | 'TASK_CANCELLED' | 'TASK_OVERDUE' | 'TASK_ESCALATED' | 'TASK_REASSIGNED';
  readonly actedByRoleId: string;
  readonly details: string;
  readonly payloadDelta?: Record<string, any>;
  readonly timestamp: Date;
}
