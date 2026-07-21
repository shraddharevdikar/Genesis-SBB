export interface Worklog {
  readonly worklogId: string;
  readonly uniqueWorklogCode: string; // e.g. "WLG-2026-992144"
  readonly associatedConsultantIdString: string; // Links to Consultant
  readonly associatedProjectIdString: string; // Links to Project
  readonly associatedDeliverableIdString?: string; // Optional direct deliverable link
  readonly hoursWorkedDecimal: number; // e.g. 4.5
  readonly workDate: Date;
  readonly detailedDescriptionOfActivityText: string; // Audit log for client invoicing
  readonly billingStatus: 'PENDING_TIMESHEET_APPROVAL' | 'BILLABLE_APPROVED' | 'NON_BILLABLE_APPROVED' | 'WRITTEN_OFF_REJECTED';
  readonly internalCostValuationAmountDecimal: number; // hours * consultant.costPerHour
  readonly approvedByProjectManagerStaffRoleIdString?: string;
  readonly createdTimestamp: Date;
}
