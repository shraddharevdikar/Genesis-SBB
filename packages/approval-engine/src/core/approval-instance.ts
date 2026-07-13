import { ApprovalInstanceId } from '../identity/approval-instance-id.js';
import { ApprovalId } from '../identity/approval-id.js';

export type ApprovalStatus = 'PENDING' | 'IN_PROGRESS' | 'GRANTED' | 'REJECTED' | 'REWORK_REQUIRED' | 'ESCALATED' | 'EXPIRED';

export interface ApprovalInstance {
  readonly instanceId: ApprovalInstanceId;
  readonly approvalId: ApprovalId;
  readonly tenantId: string;
  readonly status: ApprovalStatus;
  readonly currentStageId?: string;
  readonly activeStepId?: string;
  readonly completedStepIds: string[];
  readonly startedAt: Date;
  readonly completedAt?: Date;
}
