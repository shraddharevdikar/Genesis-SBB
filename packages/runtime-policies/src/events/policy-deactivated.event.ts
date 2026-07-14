import { PolicyId } from '../identity/policy-id.js';

export interface PolicyDeactivatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly policyId: PolicyId;
  readonly deactivatedByRoleId: string;
  readonly reason?: string;
  readonly timestamp: Date;
}
