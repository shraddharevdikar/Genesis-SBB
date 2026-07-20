import { ProviderId } from '../providers/healthcare-provider.js';

export interface RecurringScheduleException {
  readonly exceptionDate: Date;
  readonly reasonText: string;
}

export interface AppointmentSchedule {
  readonly scheduleId: string;
  readonly uniqueScheduleCode: string; // e.g. "SCH-DR-SMITH-MON"
  readonly associatedProviderId: ProviderId;
  readonly resourceIdString: string; // e.g. physicianId, specialistId or room ID
  readonly resourceType: 'PHYSICIAN' | 'SPECIALIST' | 'OPERATING_THEATER' | 'DIAGNOSTIC_EQUIPMENT';
  readonly dayOfWeekIndex: number; // 1 (Monday) through 7 (Sunday)
  readonly standardStartTimeString: string; // e.g. "08:00"
  readonly standardEndTimeString: string; // e.g. "17:00"
  readonly slotDurationMinutesCount: number; // e.g. 20 (20-minute consultation slot)
  readonly exceptionsList: RecurringScheduleException[];
  readonly activeFlag: boolean;
  readonly lastModifiedAt: Date;
}
