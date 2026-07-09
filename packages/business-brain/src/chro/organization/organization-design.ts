export interface SpanOfControlMetric {
  readonly managementLayer: string; // e.g. "DIRECTOR", "VP"
  readonly averageDirectReportsCount: number;
}

export interface OrganizationDesign {
  readonly designId: string;
  readonly tenantId: string;
  readonly targetDepartment: string;
  readonly measuredLayersCount: number;
  readonly spansOfControl: SpanOfControlMetric[];
  readonly crossFunctionalPointsCount: number;
  readonly organizationalRedundancyScore: number; // 0 to 100
  readonly isApproved: boolean;
  readonly updatedAt: Date;
}
