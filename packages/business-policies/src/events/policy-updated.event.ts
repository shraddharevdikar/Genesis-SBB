import { PolicyId } from '../identity/policy-id.js';
import { PolicyVersion } from '../core/policy-version.js';

export interface PolicyUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly policyId: PolicyId;
  readonly uniquePolicyCode: string;
  readonly updatedVersion: PolicyVersion;
  readonly traceId: string;
  readonly timestamp: Date;
}
