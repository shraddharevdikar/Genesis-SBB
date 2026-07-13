export interface SchedulingPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly maxSchedulesPerTenant: number;
  readonly minAllowedIntervalMinutes: number; // Prevent scheduling loops (e.g. minimum 1 minute)
  readonly allowOverlappingRecurrences: boolean;
  readonly requireGovernanceApprovalForSystemWideSchedules: boolean;
}
