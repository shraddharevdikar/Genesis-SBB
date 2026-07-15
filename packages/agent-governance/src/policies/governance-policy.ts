import { PolicyId } from '../identity/policy-id.js';

export type PolicyCategory = 'BUSINESS' | 'OPERATIONAL' | 'SECURITY' | 'REGULATORY';

export interface GovernancePolicy {
  readonly policyId: PolicyId;
  readonly tenantId: string;
  readonly category: PolicyCategory;
  readonly code: string; // e.g. "SBB_AUTH_FOUR_EYES"
  readonly displayName: string;
  readonly description: string;
  readonly isMandatory: boolean;
  readonly isActive: boolean;
  readonly versionNumber: number;
}
