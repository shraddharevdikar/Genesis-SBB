import { TaskId } from '../identity/task-id.js';

export interface AssignmentRule {
  readonly ruleId: string;
  readonly taskId: TaskId;
  readonly tenantId: string;
  readonly evaluationCriteria: string; // e.g. "SKILL_MATCH" or "ROUTING_KEY"
  readonly targetAssigneeId: string;
  readonly fallbackAssigneeId?: string;
  readonly isOverrideAllowed: boolean;
}
