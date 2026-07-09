export interface ProductivityMetric {
  readonly department: string;
  readonly outputPerFTEIndex: number; // normalized score
  readonly burnoutRiskIndicator: 'LOW' | 'MEDIUM' | 'HIGH';
  readonly meetingsHoursPerWeekAvg: number;
}

export interface ProductivityInsights {
  readonly insightsId: string;
  readonly tenantId: string;
  readonly focusPeriod: string;
  readonly organizationalProductivityScore: number; // 0 to 100
  readonly departmentProductivities: ProductivityMetric[];
  readonly majorFrictionPoints: string[];
  readonly analyzedAt: Date;
}
