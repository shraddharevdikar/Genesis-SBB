import { ScheduleId } from '../identity/schedule-id.js';

export interface SchedulePerformance {
  readonly performanceId: string;
  readonly scheduleId: ScheduleId;
  readonly tenantId: string;
  readonly avgExecutionDelaySeconds: number; // Scheduled vs actual start delay
  readonly maxExecutionDelaySeconds: number;
  readonly avgExecutionDurationSeconds: number; // Time to process the payload
  readonly lastCalculatedAt: Date;
}
