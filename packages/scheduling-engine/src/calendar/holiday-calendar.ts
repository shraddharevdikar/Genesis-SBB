export interface Holiday {
  readonly date: Date;
  readonly name: string;
  readonly isPaidTimeOff: boolean;
  readonly description?: string;
}

export interface HolidayCalendar {
  readonly holidayCalendarId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly year: number;
  readonly holidays: Holiday[];
}
