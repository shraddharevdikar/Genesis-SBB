export interface ApprovalRule {
  readonly ruleId: string;
  readonly tenantId: string;
  readonly ruleCode: string; // e.g., "SBB_SAFETY_CRITICAL_RULE"
  readonly triggerExpressionText: string; // Evaluated dynamically against goal/plan data
  readonly requiredReviewerRolesList: string[]; // e.g. ["SBB_SAFETY_BOARD_OFFICER", "SBB_MAINTENANCE_SUPERVISOR"]
  readonly description: string;
  readonly isActive: boolean;
}
