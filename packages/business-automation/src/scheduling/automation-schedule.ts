import { RecurrencePattern } from './recurrence-pattern.js';
import { ExecutionWindow } from './execution-window.js';

export type ScheduleTypeCode =
  | 'ONE_TIME_IMMEDIATE'
  | 'ONE_TIME_FUTURE'
  | 'RECURRING_INTERVAL'
  | 'CRON_EXPRESSION'
  | 'BUSINESS_CALENDAR_DRIVEN';

export interface AutomationSchedule {
  readonly scheduleId: string;
  readonly typeCode: ScheduleTypeCode;
  readonly recurrence?: RecurrencePattern;
  readonly allowedWindowsList: ExecutionWindow[]; // e.g. Business hours only
  readonly timezoneString: string; // e.g. "Europe/Zurich"
  readonly respectsSwissHolidaysFlag: boolean;
  readonly startValidAt: Date;
  readonly endValidAt?: Date;
}
