import { PolicyId } from '../identity/policy-id.js';

export interface PolicyRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredPolicyId: PolicyId;
  readonly uniquePolicyCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
