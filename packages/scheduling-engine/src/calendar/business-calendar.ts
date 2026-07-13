import { CalendarId } from '../identity/calendar-id.js';

export interface BusinessCalendar {
  readonly calendarId: CalendarId;
  readonly tenantId: string;
  readonly name: string;
  readonly description?: string;
  readonly countryCode: string;
  readonly regionCode?: string;
  readonly timezone: string;
  readonly holidayCalendarIds: string[];
  readonly maintenanceWindowIds: string[];
  readonly isActive: boolean;
}
