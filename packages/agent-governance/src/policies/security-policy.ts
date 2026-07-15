import { GovernancePolicy } from './governance-policy.js';

export interface SecurityPolicy extends GovernancePolicy {
  readonly category: 'SECURITY';
  readonly minRequiredSecurityClearanceLevel: string; // e.g., "SECRET_COGNITIVE"
  readonly allowAnonymousAccess: boolean;
  readonly encryptionStandardRequiredCode: string; // e.g. "AES_GCM_256"
  readonly ipAddressBannedSubnetsList: string[];
}
