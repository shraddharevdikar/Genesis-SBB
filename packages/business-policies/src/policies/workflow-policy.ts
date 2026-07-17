import { BusinessPolicy } from './business-policy.js';
import { WorkflowId } from '@sbb/business-workflows';

export interface WorkflowPolicy {
  readonly basePolicy: BusinessPolicy;
  readonly targetWorkflowId: WorkflowId;
  readonly requireFourEyesApprovalAtStepIdStringsList: string[];
  readonly fallbackRoutingProcessIdString?: string;
}
