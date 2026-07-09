import { ExecutiveRole } from '../../core/contracts/executive-role.js';

export interface OperationalAuthority {
  readonly authorityId: string;
  readonly role: ExecutiveRole;
  readonly canApproveResourcePlan: boolean;
  readonly maxDurationDelayAuthorityDays: number;
  readonly escalationTriggerCount: number;
}
