export interface ExecutiveOfficer {
  readonly roleId: string;
  readonly title: string; // e.g., "CEO", "CFO"
  readonly individualDisplayName: string;
  readonly tenureMonths: number;
  readonly alignmentRating: number; // 0 to 100
}

export interface LeadershipState {
  readonly executives: ExecutiveOfficer[];
  readonly alignmentTrend: 'IMPROVING' | 'STABLE' | 'DEGRADING';
  readonly openExecutivePositionsCount: number;
  readonly successionPlanCoveragePercent: number;
}
