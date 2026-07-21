export type HousekeepingPriorityCode = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL_CHECK_IN_QUEUE';

export type HousekeepingTaskType =
  | 'STAY_OVER_CLEAN'
  | 'CHECK_OUT_DEEP_CLEAN'
  | 'REFRESH_TURNDOWN'
  | 'TOUCH_UP_VACANT'
  | 'SPECIAL_REQUEST_DISINFECTION';

export interface HousekeepingTask {
  readonly taskId: string;
  readonly uniqueTaskCode: string; // e.g. "HK-TSK-2026-99241"
  readonly associatedRoomIdString: string;
  readonly taskType: HousekeepingTaskType;
  readonly priorityCode: HousekeepingPriorityCode;
  readonly assignedHousekeeperStaffRoleIdString?: string; // Links to HROS
  readonly targetDurationMinutesCount: number; // e.g. 45 minutes
  readonly actualDurationMinutesCount?: number;
  readonly completedFlag: boolean;
  readonly completedTimestamp?: Date;
  readonly supervisorApprovedFlag: boolean;
  readonly supervisorFeedbackNotes?: string;
  readonly createdAt: Date;
  readonly lastModifiedAt: Date;
}
