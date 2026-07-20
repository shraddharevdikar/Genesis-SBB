export interface PreventiveMaintenanceSchedule {
  readonly scheduleId: string;
  readonly uniqueScheduleCode: string; // e.g. "PM-SCH-2026-CH-04"
  readonly associatedMaintenancePlanIdString: string;
  readonly targetMachineIdString: string;
  readonly scheduledDate: Date;
  readonly allocatedTechnicianStaffRoleIdString: string; // Links to HROS / Role
  readonly estDowntimeMinutesCount: number;
  readonly completionStatus: 'PENDING_SCHEDULED' | 'IN_MAINTENANCE' | 'COMPLETED' | 'OVERDUE' | 'CANCELLED';
  readonly completedAt?: Date;
  readonly checklistResultsJSONString?: string; // Checklist item results
  readonly notesText?: string;
}
