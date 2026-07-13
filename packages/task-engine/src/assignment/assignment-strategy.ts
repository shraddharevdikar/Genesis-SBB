import { Assignee } from './assignee.js';
import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface AssignmentStrategy {
  /**
   * Evaluates workload and profiles to resolve the optimal assignee.
   */
  resolveOptimalAssignee(
    tenantId: string,
    instanceId: TaskInstanceId,
    candidatePool: Assignee[]
  ): Promise<{ resolvedAssignee: Assignee }>;
}
