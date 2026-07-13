import { TaskInstanceId } from '../identity/task-instance-id.js';

export interface ReassignmentPolicy {
  readonly policyId: string;
  readonly instanceId: TaskInstanceId;
  readonly maxReassignmentCount: number;
  readonly currentReassignmentCount: number;
  readonly requiresManagerApproval: boolean;
  readonly blacklistAssigneeIds: string[];
}
