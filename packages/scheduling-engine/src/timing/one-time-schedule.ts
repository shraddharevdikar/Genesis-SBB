import { ScheduleId } from '../identity/schedule-id.js';

export interface OneTimeSchedule {
  readonly oneTimeId: string;
  readonly scheduleId: ScheduleId;
  readonly targetExecutionAt: Date;
  readonly delayToleranceMinutes: number; // Max delay before considered missed
}
