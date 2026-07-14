import { PolicyId } from '../identity/policy-id.js';
import { PolicyVersionId } from '../identity/policy-version-id.js';

export interface PolicyAudit {
  readonly auditId: string;
  readonly tenantId: string;
  readonly policyId: PolicyId;
  readonly versionId?: PolicyVersionId;
  readonly evaluatedContextId?: string;
  readonly isAllowed: boolean;
  readonly actionTrigger: 'EVALUATION' | 'REGISTRATION' | 'ACTIVATION' | 'MUTATION' | 'DEPRECATION';
  readonly triggeredByRoleId: string;
  readonly payloadHashSnapshot: string; // GDPR masked verification hash
  readonly resultSnapshotMessage: string;
  readonly timestamp: Date;
}
