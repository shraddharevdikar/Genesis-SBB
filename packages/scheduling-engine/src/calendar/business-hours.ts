export interface TimeRange {
  readonly startHour: number; // 0-23
  readonly startMinute: number; // 0-59
  readonly endHour: number; // 0-23
  readonly endMinute: number; // 0-59
}

export interface DailyHours {
  readonly dayOfWeek: 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';
  readonly isWorkingDay: boolean;
  readonly operationalHours: TimeRange[];
}

export interface BusinessHours {
  readonly businessHoursId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly dailySchedules: DailyHours[];
}
