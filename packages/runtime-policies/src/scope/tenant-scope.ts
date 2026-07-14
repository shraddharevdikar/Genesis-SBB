import { PolicyId } from '../identity/policy-id.js';

export interface TenantScope {
  readonly scopeId: string;
  readonly policyId: PolicyId;
  readonly tenantId: string;
  readonly isMultiTenantOverridable: boolean;
  readonly isolatedDatabaseInstanceName?: string;
}
