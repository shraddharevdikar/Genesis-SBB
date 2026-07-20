import { BusinessReport } from './business-report.js';

export interface OperationalReport extends BusinessReport {
  readonly targetDepartmentIdString: string; // e.g. "DEP-OPERATIONS"
  readonly trackingBusinessProcessCode?: string; // e.g. "PROC-LOGISTICS"
  readonly totalSlaViolationsTriggeredCount: number;
  readonly reportGenerationCadenceIntervalDaysCount: number; // e.g. 7 for weekly report
}
