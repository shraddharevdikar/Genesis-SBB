export interface CohortProgress {
  readonly cohortName: string; // e.g. "Senior Dev to Manager Transition"
  readonly participantCount: number;
  readonly completionRatePercent: number;
  readonly impactRating: number; // 1.0 to 5.0
}

export interface CapabilityDevelopment {
  readonly developmentId: string;
  readonly tenantId: string;
  readonly targetedDepartment: string;
  readonly measuredPeriod: string;
  readonly keyCohorts: CohortProgress[];
  readonly leadershipBenchStrengthRatio: number; // successors / total critical positions
  readonly analyzedAt: Date;
}
