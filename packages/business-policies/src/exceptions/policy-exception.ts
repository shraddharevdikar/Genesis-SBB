import { PolicyId } from '../identity/policy-id.js';
import { PolicyRuleId } from '../identity/policy-rule-id.js';

export interface PolicyException {
  readonly exceptionId: string;
  readonly targetPolicyId: PolicyId;
  readonly restrictedToRuleIdStringsList?: PolicyRuleId[];
  readonly justificationNotes: string;
  readonly assignedOperatorRoleIdString: string; // The specific role that is granted this bypass
  readonly expiresAt: Date;
  readonly isEmergencyOverride: boolean;
  readonly overrideLoggedAt?: Date;
}
