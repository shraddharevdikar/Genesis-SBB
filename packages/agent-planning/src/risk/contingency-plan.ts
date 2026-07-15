export interface ContingencyPlan {
  readonly contingencyId: string;
  readonly triggerConditionDescription: string; // e.g. "Step 3 fails with timeout error"
  readonly correctiveActionPlanDescription: string;
  readonly fallbackTargetRoleId: string; // supervisor role notified on trigger
  readonly safetyApprovalRequired: boolean;
}
