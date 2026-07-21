export interface ScheduledCleaningRow {
  readonly roomIdString: string;
  readonly scheduledOrderIndex: number; // e.g. 1st, 2nd, 3rd in the shift
  readonly cleaningType: 'FULL' | 'TOUCH_UP' | 'LINEN_CHANGE_ONLY';
  readonly estimatedStartHourText: string; // e.g., "09:30"
}

export interface CleaningSchedule {
  readonly scheduleId: string;
  readonly uniqueScheduleCode: string; // e.g., "SCH-HK-2026-0814-ZUR"
  readonly associatedPropertyIdString: string;
  readonly shiftStartDate: Date;
  readonly housekeepingSupervisorStaffRoleIdString: string; // Supervisor in charge of shift
  readonly scheduledCleaningRowsList: ScheduledCleaningRow[];
  readonly scheduledStaffRolesCount: number;
  readonly shiftCompletedFlag: boolean;
  readonly lastModifiedAt: Date;
}
