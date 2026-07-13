import { ApprovalInstanceId } from '../identity/approval-instance-id.js';

export type DecisionType = 'APPROVE' | 'REJECT' | 'REQUEST_REWORK' | 'ESCALATE' | 'DELEGATE';

export interface ApprovalDecision {
  readonly decisionId: string;
  readonly instanceId: ApprovalInstanceId;
  readonly stepId: string;
  readonly decision: DecisionType;
  readonly comments?: string;
  readonly deciderRoleId: string;
  readonly digitalSignature?: string;
  readonly timestamp: Date;
}
