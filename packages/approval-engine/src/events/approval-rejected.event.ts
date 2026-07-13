import { ApprovalInstanceId } from '../identity/approval-instance-id.js';

export interface ApprovalRejectedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: ApprovalInstanceId;
  readonly rejectedByRoleId: string;
  readonly reason: string;
  readonly timestamp: Date;
}
