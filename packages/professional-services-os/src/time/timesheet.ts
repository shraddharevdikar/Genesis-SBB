import { Worklog } from '../delivery/worklog.js';

export type TimesheetStatusCode = 'DRAFT_IN_PROGRESS' | 'SUBMITTED_AWAITING_APPROVAL' | 'PARTIALLY_APPROVED' | 'FULLY_APPROVED' | 'REJECTED_RE_SUBMIT';

export interface Timesheet {
  readonly timesheetId: string;
  readonly uniqueTimesheetCode: string; // e.g. "TSH-CON-902144-2026-W42"
  readonly associatedConsultantIdString: string; // Links to Consultant
  readonly weekStartDate: Date; // e.g. Monday
  readonly weekEndDate: Date; // e.g. Sunday
  readonly associatedWorklogsList: Worklog[];
  readonly totalHoursSubmittedDecimal: number;
  readonly totalBillableHoursApprovedDecimal: number;
  readonly timesheetStatus: TimesheetStatusCode;
  readonly approvedByStaffRoleIdString?: string; // Resource Manager or practice lead
  readonly submittedTimestamp?: Date;
  readonly approvalTimestamp?: Date;
  readonly lastModifiedAt: Date;
}
