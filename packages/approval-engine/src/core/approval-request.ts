import { ApprovalRequestId } from '../identity/approval-request-id.js';
import { ApprovalId } from '../identity/approval-id.js';

export interface ApprovalRequest {
  readonly requestId: ApprovalRequestId;
  readonly approvalId: ApprovalId;
  readonly tenantId: string;
  readonly title: string;
  readonly description?: string;
  readonly dataPayload: Record<string, any>;
  readonly initiatorRoleId: string;
  readonly requestedAt: Date;
}
