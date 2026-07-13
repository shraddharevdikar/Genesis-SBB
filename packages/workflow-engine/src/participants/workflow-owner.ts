import { WorkflowRole } from './workflow-role.js';

export interface WorkflowOwner {
  readonly ownerId: string;
  readonly tenantId: string;
  readonly role: WorkflowRole;
  readonly email: string;
  readonly canOverrideRules: boolean;
}
