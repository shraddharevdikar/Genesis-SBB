import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowSecurity {
  readonly securityId: string;
  readonly workflowId: WorkflowId;
  readonly tenantId: string;
  readonly requiredClearance: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET';
  readonly allowedNetworkSubnets: string[];
  readonly enableAuditSigning: boolean;
}
