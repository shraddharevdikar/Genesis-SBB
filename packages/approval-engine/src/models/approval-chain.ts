import { ApprovalId } from '../identity/approval-id.js';
import { ApprovalStage } from './approval-stage.js';

export interface ApprovalChain {
  readonly chainId: string;
  readonly approvalId: ApprovalId;
  readonly tenantId: string;
  readonly name: string;
  readonly description?: string;
  readonly stages: ApprovalStage[];
  readonly version: string;
  readonly isActive: boolean;
  readonly createdAt: Date;
}
