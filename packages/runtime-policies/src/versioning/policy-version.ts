import { PolicyId } from '../identity/policy-id.js';
import { PolicyVersionId } from '../identity/policy-version-id.js';

export interface PolicyVersion {
  readonly versionId: PolicyVersionId;
  readonly policyId: PolicyId;
  readonly versionNumber: string; // e.g. "1.3.0"
  readonly changeNotes: string;
  readonly rulesDefinitionPayload: string; // Stored policy conditions JSON representation
  readonly isApproved: boolean;
  readonly approvedByRoleId?: string;
  readonly releasedAt?: Date;
  readonly isActive: boolean;
}
