import { BusinessAnalysis } from './business-analysis.js';

export interface DepartmentSummary {
  readonly department: string;
  readonly headOfDepartment: string;
  readonly healthStatus: 'GREEN' | 'YELLOW' | 'RED';
  readonly keyHighlights: string[];
  readonly criticalBlockers: string[];
}

export interface ExecutiveSummary {
  readonly summaryId: string;
  readonly tenantId: string;
  readonly compiledAt: Date;
  readonly title: string;
  readonly overviewText: string;
  readonly businessAnalysisReferenceId?: string;
  readonly departmentSummaries: DepartmentSummary[];
  readonly topStrategicPriorities: string[];
}
