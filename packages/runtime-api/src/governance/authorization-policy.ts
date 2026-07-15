export interface AuthorizationPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly allowedRoles: string[];
  readonly forbiddenRoles: string[];
  readonly enableDualApprovals: boolean; // Whether 4-eyes approval verification is required
  readonly restrictedActionPatterns: string[]; // e.g. ["terminateWorkflow", "cancelJob"]
}
