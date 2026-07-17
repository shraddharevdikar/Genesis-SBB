import { PolicyId } from '../identity/policy-id.js';

export interface PolicyCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly policyId: PolicyId;
  readonly uniquePolicyCode: string;
  readonly categoryCode: string;
  readonly createdByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
