export type AssigneeType = 'INDIVIDUAL' | 'ROLE' | 'TEAM' | 'DEPARTMENT' | 'AI_AGENT';

export interface Assignee {
  readonly assigneeId: string;
  readonly tenantId: string;
  readonly type: AssigneeType;
  readonly name: string;
  readonly metadata?: Record<string, any>;
}
