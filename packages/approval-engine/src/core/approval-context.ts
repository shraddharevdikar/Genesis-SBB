import { ApprovalRequestId } from '../identity/approval-request-id.js';
import { ApprovalInstanceId } from '../identity/approval-instance-id.js';

export interface ApprovalContext {
  readonly requestId: ApprovalRequestId;
  readonly instanceId: ApprovalInstanceId;
  readonly tenantId: string;
  readonly securityToken?: string;
  readonly variables: Record<string, any>;
  readonly createdAt: Date;
  readonly expiresAt: Date;
}
