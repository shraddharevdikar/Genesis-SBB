export interface InterventionPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly allowHumanSupervisorToKillSession: boolean;
  readonly allowHumanToEditExecutingSteps: boolean;
  readonly pauseOnRiskViolationCode: string; // e.g. "SBB_RISK_EXCEEDS_0_7"
  readonly escalationGracePeriodMinutes: number; // Time given to human to react before auto-aborting
  readonly descriptionText: string;
}
