export interface CapacityMetric {
  readonly department: string; // e.g. "ENGINEERING", "SALES"
  readonly currentFteCount: number;
  readonly budgetedFteCount: number;
  readonly capacityUtilizationPercent: number; // e.g., 92.5
  readonly bottleneckScore: number; // 0 to 100
}

export interface WorkforceCapacity {
  readonly capacityId: string;
  readonly tenantId: string;
  readonly evaluatedAt: Date;
  readonly metrics: CapacityMetric[];
  readonly totalOvertimeRiskCount: number;
  readonly coreResourceShortageSummary: string;
}
