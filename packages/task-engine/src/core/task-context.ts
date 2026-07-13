import { TaskInstanceId } from '../identity/task-instance-id.js';
import { TaskId } from '../identity/task-id.js';

export interface TaskContext {
  readonly instanceId: TaskInstanceId;
  readonly taskId: TaskId;
  readonly tenantId: string;
  readonly workflowInstanceId?: string;
  readonly approvalInstanceId?: string;
  readonly runtimeCorrelationId?: string;
  readonly taskVariables: Record<string, any>;
  readonly clientMetadata?: Record<string, any>;
  readonly initializedAt: Date;
}
