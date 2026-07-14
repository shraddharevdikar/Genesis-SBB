import { PolicyId } from '../identity/policy-id.js';

export type PolicyCategoryType =
  | 'SECURITY'
  | 'AUTHORIZATION'
  | 'EXECUTION'
  | 'SCHEDULING'
  | 'NOTIFICATION'
  | 'COMPLIANCE'
  | 'RETENTION';

export interface PolicyDefinition {
  readonly policyId: PolicyId;
  readonly tenantId: string;
  readonly name: string; // e.g., "SBB.WorkflowEngine.MaxParallelWorkflows"
  readonly category: PolicyCategoryType;
  readonly description: string;
  readonly isEnforced: boolean;
  readonly currentVersionId: string;
  readonly createdByRoleId: string;
  readonly createdAt: Date;
}
