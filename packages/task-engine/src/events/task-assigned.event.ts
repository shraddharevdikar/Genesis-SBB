import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface TaskAssignedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: TaskInstanceId;
  readonly assigneeId: string;
  readonly assigneeType: 'INDIVIDUAL' | 'ROLE' | 'TEAM' | 'DEPARTMENT' | 'AI_AGENT';
  readonly timestamp: Date;
}
