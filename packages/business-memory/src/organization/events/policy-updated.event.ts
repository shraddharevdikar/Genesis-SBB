import { Policy } from '../governance/policy.js';

export interface PolicyUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly policyId: string;
  readonly previousRevisionNumber: number;
  readonly newPolicyRevision: Policy;
  readonly updatedByRoleId: string;
  readonly changeRationale: string;
  readonly timestamp: Date;
}
