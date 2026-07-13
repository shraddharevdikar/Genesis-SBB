export interface DelegationPolicy {
  readonly delegationPolicyId: string;
  readonly tenantId: string;
  readonly allowSelfDelegation: boolean;
  readonly restrictedRolesForDelegation: string[];
  readonly maxDelegationDurationDays: number;
}
