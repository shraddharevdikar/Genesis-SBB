import { PolicyId } from '../identity/policy-id.js';

export interface PolicyPublishedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly policyId: PolicyId;
  readonly uniquePolicyCode: string;
  readonly activatedAt: Date;
  readonly traceId: string;
  readonly timestamp: Date;
}
