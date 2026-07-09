export interface HiringRequirement {
  readonly roleId: string;
  readonly title: string;
  readonly department: string;
  readonly priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly targetedQuarter: string; // e.g., "Q3-2026"
  readonly estimatedSalaryUSD: number;
  readonly locationHub: string;
}

export interface WorkforcePlanning {
  readonly planId: string;
  readonly tenantId: string;
  readonly planningPeriod: string; // e.g., "FY2026-H2"
  readonly futureHiringList: HiringRequirement[];
  readonly totalPlannedHires: number;
  readonly estimatedNewHireCostUSD: number;
  readonly criticalHireFulfillmentPercent: number;
  readonly isApproved: boolean;
  readonly updatedAt: Date;
}
