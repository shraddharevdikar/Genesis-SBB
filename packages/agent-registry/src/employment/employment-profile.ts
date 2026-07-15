import { EmployeeNumber } from '../identity/employee-number.js';
import { EmploymentStatus } from './employment-status.js';
import { AssignmentHistory } from './assignment-history.js';
import { ReportingLine } from '../directory/reporting-line.js';

export interface EmploymentProfile {
  readonly profileId: string;
  readonly agentId: string;
  readonly employeeNumber: EmployeeNumber;
  readonly currentStatus: EmploymentStatus;
  readonly currentReportingLine: ReportingLine;
  readonly currentDepartmentId: string;
  readonly dateOfHire: Date;
  readonly dateOfRetirement?: Date;
  readonly assignmentsLog: AssignmentHistory[];
}
