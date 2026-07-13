import { ScheduleId } from '../identity/schedule-id.js';

export interface IntervalSchedule {
  readonly intervalId: string;
  readonly scheduleId: ScheduleId;
  readonly intervalValue: number;
  readonly intervalUnit: 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS';
  readonly startAt: Date;
  readonly endAt?: Date;
  readonly isFixedRate: boolean; // Fixed-rate vs fixed-delay behavior representation
}
