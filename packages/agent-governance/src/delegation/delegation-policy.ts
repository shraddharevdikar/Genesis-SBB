export interface DelegationPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly allowAgentToAgentDelegation: boolean;
  readonly allowAgentToHumanEscalation: boolean;
  readonly maxDelegationDepthLimit: number; // e.g. Max 3 hops of delegation allowed
  readonly minimumTargetTrustScoreThreshold: number; // Minimum trust score target must have to accept delegation
  readonly authorizedTargetRolesList: string[]; // Roles permitted to accept delegated authority
}
