import { PolicyId } from '../identity/policy-id.js';
import { PolicyVersionId } from '../identity/policy-version-id.js';

export interface PolicyHistoryEntry {
  readonly entryId: string;
  readonly policyId: PolicyId;
  readonly versionId: PolicyVersionId;
  readonly actionType: 'CREATED' | 'UPDATED' | 'ACTIVATED' | 'DEACTIVATED' | 'ROLLED_BACK';
  readonly changedByRoleId: string;
  readonly timestamp: Date;
  readonly comment?: string;
  readonly preStateSnapshot: string; // Serialized state
  readonly postStateSnapshot: string;
}

export interface PolicyHistory {
  readonly policyId: PolicyId;
  readonly entries: PolicyHistoryEntry[];
}
