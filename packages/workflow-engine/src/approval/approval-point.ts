import { WorkflowStepId } from '../identity/workflow-step-id.js';

export interface ApprovalPoint {
  readonly approvalPointId: string;
  readonly stepId: WorkflowStepId;
  readonly name: string;
  readonly requiredApprovalCount: number;
  readonly currentApproverRoleIds: string[];
  readonly signedByRoleIds: string[];
  readonly status: 'PENDING' | 'APPROVED' | 'REJECTED';
}
