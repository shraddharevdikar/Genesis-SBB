import { ApprovalStatus, ApprovalStrategy } from '../constants/workflow.constants.js';

export interface IVote {
  approverId: string;
  decision: 'APPROVED' | 'REJECTED';
  comment?: string;
  timestamp: Date;
}

export interface IApprovalRecord {
  id: string;
  instanceId: string;
  stepId: string;
  stepExecutionId?: string | null;
  tenantId?: string | null;
  organizationId?: string | null;
  approverType: string;
  requiredApprovers: string[];
  approvalStrategy: ApprovalStrategy;
  votes: IVote[];
  status: ApprovalStatus;
  comment?: string | null;
  approvedAt?: Date | null;
  expiresAt?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
