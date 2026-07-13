import { TaskId } from '../identity/task-id.js';

export interface TaskDefinition {
  readonly taskId: TaskId;
  readonly tenantId: string;
  readonly name: string;
  readonly description: string;
  readonly category: string;
  readonly defaultPriority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly requiredRoleIds: string[];
  readonly estimatedMinutes: number;
  readonly isSlaCritical: boolean;
  readonly version: string;
  readonly createdAt: Date;
}
