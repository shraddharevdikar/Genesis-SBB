export interface Responsibility {
  readonly responsibilityId: string;
  readonly code: string; // e.g. "BUDGET_ALLOCATION", "KPI_REPORTING"
  readonly title: string;
  readonly descriptionText: string;
  readonly mandatorySlaDurationHours?: number;
}
