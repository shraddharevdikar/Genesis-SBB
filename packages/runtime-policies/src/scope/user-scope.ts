import { PolicyId } from '../identity/policy-id.js';

export interface UserScope {
  readonly scopeId: string;
  readonly policyId: PolicyId;
  readonly tenantId: string;
  readonly userId: string;
  readonly applicableRoles: string[];
  readonly isPersonalExceptionRule: boolean;
}
