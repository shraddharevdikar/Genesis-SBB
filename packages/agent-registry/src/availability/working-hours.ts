export interface WorkingHours {
  readonly workingHoursId: string;
  readonly daysOfWeek: number[]; // 0 (Sunday) to 6 (Saturday)
  readonly startLocalTime: string; // e.g. "08:00"
  readonly endLocalTime: string; // e.g. "18:00"
  readonly timeZone: string; // e.g. "Europe/Zurich"
  readonly allowOvertime: boolean; // Allowed to run off-hours during emergency
}
