import { TaskId } from '../identity/task-id.js';

export interface ProductivityMetrics {
  readonly metricsId: string;
  readonly taskId: TaskId;
  readonly tenantId: string;
  readonly avgCompletionDurationMinutes: number;
  readonly sliSlaSuccessRatePercentage: number;
  readonly reworkOrReassignmentRatePercentage: number;
  readonly calculatedAt: Date;
}
