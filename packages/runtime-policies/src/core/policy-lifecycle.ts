import { PolicyId } from '../identity/policy-id.js';

export type PolicyStatus = 'DRAFT' | 'ACTIVE' | 'SUSPENDED' | 'DEPRECATED' | 'ARCHIVED';

export interface PolicyLifecycle {
  readonly policyId: PolicyId;
  readonly tenantId: string;
  readonly currentStatus: PolicyStatus;
  readonly statusHistory: Array<{
    readonly status: PolicyStatus;
    readonly changedAt: Date;
    readonly changedByRoleId: string;
    readonly reason?: string;
  }>;
  readonly isArchived: boolean;
}
