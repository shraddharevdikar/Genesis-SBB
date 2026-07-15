import { PolicyId } from '../identity/policy-id.js';
import { PolicyCategory } from '../policies/governance-policy.js';

export interface GovernancePolicyUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly policyId: PolicyId;
  readonly policyCategory: PolicyCategory;
  readonly updatedVersionNumber: number;
  readonly updateTypeCode: 'CREATED' | 'MODIFIED' | 'DEACTIVATED';
  readonly updatedByParticipantId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
