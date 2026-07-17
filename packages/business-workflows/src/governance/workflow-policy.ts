import { BusinessPolicyReference } from '@sbb/business-foundation';
import { WorkflowId } from '../identity/workflow-id.js';

export interface WorkflowPolicy {
  readonly workflowPolicyId: string;
  readonly targetWorkflowId: WorkflowId;
  readonly basePolicyRef: BusinessPolicyReference;
  readonly maximumPermissibleBypassesCount: number;
  readonly auditNotificationChannelCode: string; // e.g. "EMAIL_LEGAL", "SEC_SLACK"
  readonly requiresContinuousReview: boolean;
}
