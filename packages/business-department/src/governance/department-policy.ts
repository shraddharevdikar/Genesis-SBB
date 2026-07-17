import { BusinessPolicyReference } from '@sbb/business-foundation';

export interface DepartmentPolicy {
  readonly departmentPolicyId: string;
  readonly basePolicyRef: BusinessPolicyReference;
  readonly departmentSpecificOverrideRulesList: string[];
  readonly escalationContactParticipantId: string;
}
