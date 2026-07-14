import { PolicyId } from '../identity/policy-id.js';

export interface AuthorizationPolicy {
  readonly authPolicyId: string;
  readonly policyId: PolicyId;
  readonly requiredPermissions: string[];
  readonly allowedRoles: string[];
  readonly denyRules?: string[];
  readonly requiresDoubleSignature: boolean; // Four-eyes principle
  readonly dualAuthorizationLimitAmount?: number;
}
