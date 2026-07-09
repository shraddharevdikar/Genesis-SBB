export interface DepartmentPerformanceStats {
  readonly department: string;
  readonly highPerformersPercent: number; // rating >= 4
  readonly lowPerformersPercent: number; // rating <= 2
  readonly averagePerformanceRating: number;
}

export interface PerformanceHealth {
  readonly healthId: string;
  readonly tenantId: string;
  readonly measuredPeriod: string; // e.g. "FY2026-Q1"
  readonly overallAveragePerformanceRating: number;
  readonly statsByDepartment: DepartmentPerformanceStats[];
  readonly underperformingTalentCount: number;
  readonly structuredImprovementPlansCount: number; // employees currently on a PIP
  readonly evaluatedAt: Date;
}
