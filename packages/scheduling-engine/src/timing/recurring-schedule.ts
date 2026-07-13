import { ScheduleId } from '../identity/schedule-id.js';

export type RecurrenceFrequency = 'HOURLY' | 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';

export interface RecurringSchedule {
  readonly recurringId: string;
  readonly scheduleId: ScheduleId;
  readonly frequency: RecurrenceFrequency;
  readonly interval: number; // e.g. every 2 weeks (interval=2, frequency=WEEKLY)
  readonly cronExpression?: string; // Standard enterprise cron format if applicable
  readonly daysOfWeek?: number[]; // 0-6 (Sunday-Saturday)
  readonly daysOfMonth?: number[]; // 1-31
  readonly startAt: Date;
  readonly endAt?: Date;
  readonly maxOccurrences?: number;
}
