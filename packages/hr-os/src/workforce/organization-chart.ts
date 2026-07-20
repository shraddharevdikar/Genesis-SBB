export interface OrgNode {
  readonly employeeIdString: string;
  readonly jobTitle: string;
  readonly departmentCodeString: string;
  readonly directReportsEmployeeIdsList: string[];
  readonly spanOfControlCount: number;
}

export interface OrganizationChart {
  readonly chartId: string;
  readonly uniqueChartCode: string; // e.g. "ORG-2026-Q3-GLOBAL"
  readonly reportRootEmployeeIdString: string; // e.g., CEO
  readonly nodesList: OrgNode[];
  readonly aggregateLayersCount: number; // Max tree depth
  readonly lastCalculatedAt: Date;
}
