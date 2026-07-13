import { ScheduleId } from '../identity/schedule-id.js';

export interface ScheduleHealth {
  readonly healthId: string;
  readonly scheduleId: ScheduleId;
  readonly tenantId: string;
  readonly activeSchedulesCount: number;
  readonly suspendedSchedulesCount: number;
  readonly missedExecutionsCount: number;
  readonly failingExecutionsCount: number;
  readonly lastCalculatedAt: Date;
}
