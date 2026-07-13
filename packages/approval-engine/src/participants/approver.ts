import { ApprovalRole } from './approval-role.js';

export type ApproverType = 'INDIVIDUAL' | 'ROLE' | 'GROUP' | 'DELEGATE' | 'EXECUTIVE';

export interface Approver {
  readonly approverId: string;
  readonly type: ApproverType;
  readonly role?: ApprovalRole;
  readonly groupId?: string;
  readonly userId?: string;
  readonly clearanceLevel: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET';
}
