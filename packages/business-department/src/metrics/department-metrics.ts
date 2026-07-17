import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface DepartmentMetrics {
  readonly recordId: string;
  readonly departmentInstanceId: DepartmentInstanceId;
  readonly measuredOperationalEfficiencyValue: number; // e.g. 0.0 - 100.0
  readonly taskThroughputCount: number;
  readonly backlogItemCount: number;
  readonly budgetUtilizationRatio: number; // e.g. 0.0 - 1.0
  readonly recordedAt: Date;
}
