import { ApprovalInstanceId } from '../identity/approval-instance-id.js';

export interface ApprovalGrantedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: ApprovalInstanceId;
  readonly finalApprovedByRoleId: string;
  readonly digitalSignature: string;
  readonly timestamp: Date;
}
