import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface PriorityModel {
  readonly priorityId: string;
  readonly instanceId: TaskInstanceId;
  readonly currentPriority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly isUrgent: boolean;
  readonly businessValueScore: number;
  readonly complexityWeight: 'COMPLEX' | 'AVERAGE' | 'SIMPLE';
}
