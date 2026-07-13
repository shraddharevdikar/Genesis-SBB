import { ScheduleId } from '../identity/schedule-id.js';

export interface RegionalOverride {
  readonly regionCode: string; // e.g. "EMEA", "APAC", "US-EAST"
  readonly localTimezone: string;
  readonly localBlackoutCalendarId?: string;
  readonly localizedStartHourShiftMinutes: number;
}

export interface RegionalSchedule {
  readonly regionalScheduleId: string;
  readonly scheduleId: ScheduleId;
  readonly parentScheduleId: string;
  readonly regionalOverrides: RegionalOverride[];
}
