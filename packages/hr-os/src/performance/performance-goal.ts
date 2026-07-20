export type PerformanceGoalTypeCode =
  | 'COMPANY_OKR'
  | 'DEPARTMENT_KPI'
  | 'INDIVIDUAL_OUTPUT'
  | 'SKILL_DEVELOPMENT_COMPETENCY';

export interface PerformanceGoal {
  readonly goalId: string;
  readonly uniqueGoalCode: string; // e.g. "GOL-2026-ENG-042"
  readonly associatedEmployeeIdString: string;
  readonly goalType: PerformanceGoalTypeCode;
  readonly titleString: string;
  readonly descriptionNotes: string;
  readonly weightingPercentageDecimal: number; // e.g., 0.25 (out of 1.0 total)
  readonly successMeasurementCriteria: string; // Metric definition
  readonly targetCompletionDate: Date;
  readonly progressPercentageDecimal: number; // e.g. 0.85
  readonly goalStatus: 'DRAFT' | 'ACTIVE' | 'PAUSED' | 'ABANDONED' | 'ACHIEVED' | 'MISSED';
  readonly lastUpdatedAt: Date;
}
