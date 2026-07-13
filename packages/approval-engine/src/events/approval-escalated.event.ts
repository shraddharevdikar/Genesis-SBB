import { ApprovalInstanceId } from '../identity/approval-instance-id.js';

export interface ApprovalEscalatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: ApprovalInstanceId;
  readonly stepId: string;
  readonly escalatedToRoleId: string;
  readonly delayDurationMinutes: number;
  readonly timestamp: Date;
}
