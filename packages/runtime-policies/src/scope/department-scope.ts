import { PolicyId } from '../identity/policy-id.js';

export interface DepartmentScope {
  readonly scopeId: string;
  readonly policyId: PolicyId;
  readonly tenantId: string;
  readonly departmentId: string;
  readonly teamId?: string; // Optional team-level subdivision
  readonly costCenterCode?: string;
}
