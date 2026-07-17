import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface WorkforceMetrics {
  readonly recordId: string;
  readonly departmentInstanceId: DepartmentInstanceId;
  readonly activeAgentCount: number;
  readonly activeHumanStaffCount: number;
  readonly overallAgentTrustScoreAverage: number; // e.g. 0.0 - 1.0
  readonly averageTaskCompletionDurationMinutes: number;
  readonly recordedAt: Date;
}
