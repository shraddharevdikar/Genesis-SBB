import { PolicyId } from '../identity/policy-id.js';

export interface PolicyActivatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly policyId: PolicyId;
  readonly activatedByRoleId: string;
  readonly reason?: string;
  readonly timestamp: Date;
}
