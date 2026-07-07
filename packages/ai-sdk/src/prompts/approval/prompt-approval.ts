import { ApprovalStatus } from './approval-status.js';

export interface PromptReviewer {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly email?: string;
}

export interface PromptApproval {
  readonly approvalId: string;
  readonly promptId: string;
  readonly version: string;
  readonly status: ApprovalStatus;
  readonly reviewer?: PromptReviewer;
  readonly approvedAt?: Date | string;
  readonly comments?: string;
}
