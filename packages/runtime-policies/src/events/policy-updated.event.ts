import { PolicyId } from '../identity/policy-id.js';
import { PolicyVersionId } from '../identity/policy-version-id.js';

export interface PolicyUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly policyId: PolicyId;
  readonly newVersionId: PolicyVersionId;
  readonly updatedByRoleId: string;
  readonly versionNumber: string;
  readonly timestamp: Date;
}
