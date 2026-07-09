import { PrivacyLevel } from './privacy-level.js';

export interface AccessPolicy {
  readonly policyId: string;
  readonly privacyLevel: PrivacyLevel;
  readonly allowedRoles: string[];
  readonly blockedRoles?: string[];
  readonly isOwnerWriteOnly: boolean;
  readonly requiresSignoffToModify: boolean;
}
