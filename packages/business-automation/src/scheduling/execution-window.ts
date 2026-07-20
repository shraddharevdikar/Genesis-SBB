export interface ExecutionWindow {
  readonly windowId: string;
  readonly startHourOfDay: number; // 0-23
  readonly startMinuteOfHour: number; // 0-59
  readonly endHourOfDay: number; // 0-23
  readonly endMinuteOfHour: number; // 0-59
  readonly permittedDaysOfWeekList: number[]; // 1-7 (1=Monday)
  readonly isRestrictedToBusinessHoursFlag: boolean;
}
