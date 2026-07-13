import { ScheduleId } from '../identity/schedule-id.js';

export interface ScheduleReliability {
  readonly reliabilityId: string;
  readonly scheduleId: ScheduleId;
  readonly tenantId: string;
  readonly totalScheduledRunsCount: number;
  readonly successfulRunsCount: number;
  readonly failedRunsCount: number;
  readonly missedRunsCount: number;
  readonly successRatePercentage: number;
  readonly missedRatePercentage: number;
  readonly lastCalculatedAt: Date;
}
