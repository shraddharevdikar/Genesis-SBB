import { EmployeeId } from './employee.js';

export interface EmploymentStatusRecord {
  readonly statusRecordId: string;
  readonly associatedEmployeeId: EmployeeId;
  readonly isOnLeaveFlag: boolean;
  readonly currentLeaveCategoryCode?: 'ANNUAL_VACATION' | 'SICK_LEAVE' | 'MATERNITY_PATERNITY' | 'UNPAID_SABBATICAL' | 'MILITARY_DUTY';
  readonly leaveStartDate?: Date;
  readonly leavePlannedEndDate?: Date;
  readonly currentProbationStatus: 'NOT_APPLICABLE' | 'PENDING' | 'PASSED' | 'EXTENDED' | 'FAILED_AND_RELEASED';
  readonly recordLastUpdatedByOperatorRoleId: string;
  readonly lastStatusNotes: string;
}
