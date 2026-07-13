import { ApprovalInstanceId } from '../identity/approval-instance-id.js';

export interface ApprovalRequestedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: ApprovalInstanceId;
  readonly initiatedByRoleId: string;
  readonly payload: Record<string, any>;
  readonly timestamp: Date;
}
