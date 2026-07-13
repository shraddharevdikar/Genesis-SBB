import { Approver } from './approver.js';

export interface Delegate {
  readonly delegationId: string;
  readonly originalApproverId: string;
  readonly delegatedApprover: Approver;
  readonly delegatedAt: Date;
  readonly expiresAt?: Date;
  readonly reason: string;
  readonly isActive: boolean;
}
