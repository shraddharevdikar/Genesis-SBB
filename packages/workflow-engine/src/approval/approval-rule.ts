import { WorkflowId } from '../identity/workflow-id.js';

export interface ApprovalRule {
  readonly ruleId: string;
  readonly workflowId: WorkflowId;
  readonly tenantId: string;
  readonly thresholdAmount?: number;
  readonly requiresMultisig: boolean;
  readonly escalationRoleId: string;
}
