export interface EscalationPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly stalemateDurationMinutesThreshold: number; // Max wait before escalation triggered
  readonly fallbackSupervisorRoleId: string;
  readonly escalationTierName: string; // e.g. "SBB_SAFETY_BOARD"
  readonly lastModifiedAt: Date;
}
