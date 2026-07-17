import { BusinessRoleId } from '@sbb/business-roles';

export interface ApprovalStep {
  readonly approvalStepId: string;
  readonly sequenceIndex: number;
  readonly approverBusinessRoleId: BusinessRoleId;
  readonly escalationBackupRoleId?: BusinessRoleId;
  readonly timeLimitBufferHoursCount: number;
  readonly allowsDelegation: boolean;
}
