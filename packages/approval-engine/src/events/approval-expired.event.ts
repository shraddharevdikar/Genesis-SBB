import { ApprovalInstanceId } from '../identity/approval-instance-id.js';

export interface ApprovalExpiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: ApprovalInstanceId;
  readonly activeStepId: string;
  readonly expirationThresholdMinutes: number;
  readonly timestamp: Date;
}
