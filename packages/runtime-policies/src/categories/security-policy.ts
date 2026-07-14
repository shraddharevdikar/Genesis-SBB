import { PolicyId } from '../identity/policy-id.js';

export interface SecurityPolicy {
  readonly securityPolicyId: string;
  readonly policyId: PolicyId;
  readonly encryptionAlgorithmRequired: string;
  readonly minKeyLengthBits: number;
  readonly allowedIpRanges: string[];
  readonly passwordComplexityRegex?: string;
  readonly forceMfaEnabled: boolean;
  readonly sessionTimeoutMinutes: number;
}
