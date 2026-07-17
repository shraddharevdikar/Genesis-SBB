import { PolicyId } from '../identity/policy-id.js';
import { PolicyRuleId } from '../identity/policy-rule-id.js';

export interface ExceptionRequest {
  readonly requestId: string;
  readonly tenantId: string;
  readonly targetPolicyId: PolicyId;
  readonly ruleIdString?: PolicyRuleId;
  readonly justificationText: string;
  readonly requestedByOperatorRoleId: string;
  readonly requestedDurationDaysCount: number;
  readonly isEmergencyOverrideFlag: boolean;
  readonly submittedAt: Date;
}
