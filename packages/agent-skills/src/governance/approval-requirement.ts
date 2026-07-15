export interface ApprovalRequirement {
  readonly requirementId: string;
  readonly severityLevel: 'STANDARD' | 'ELEVATED' | 'HIGH_COMPLIANCE' | 'CRITICAL_ENTERPRISE';
  readonly minApproverRoleRank: string; // e.g. "SBB_FINANCIAL_DIRECTOR"
  readonly escalationTimeoutMinutes: number;
}
