export interface DepartmentDashboard {
  readonly dashboardId: string;
  readonly departmentId: string;
  readonly departmentName: string;
  readonly assignedWorkforceCount: number;
  readonly departmentThroughputPercentage: number;
  readonly currentActiveWorkflowPlanCount: number;
  readonly averageTaskCompletionDurationMs: number;
  readonly activeDepartmentAlertsCount: number;
  readonly compiledAt: Date;
}
