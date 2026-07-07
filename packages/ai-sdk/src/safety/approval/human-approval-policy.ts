export interface HumanApprovalPolicy {
  readonly policyId: string;
  readonly requiredReviewers: string[]; // List of reviewer roles or user IDs
  readonly escalationLevel: 'L1' | 'L2' | 'L3' | string;
  readonly minApprovalsRequired: number;
  readonly autoApproveOnSafeScore: boolean;
}
