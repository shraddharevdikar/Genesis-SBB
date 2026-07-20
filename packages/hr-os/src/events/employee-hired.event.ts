import { HRContext } from '../core/hr-context.js';
import { EmployeeId } from '../employees/employee.js';
import { OfferCompensationSummary } from '../recruitment/hiring-decision.js';

export interface EmployeeHiredEventPayload {
  readonly employeeId: EmployeeId;
  readonly associatedRequisitionIdString: string;
  readonly originalCandidateIdString: string;
  readonly jobTitle: string;
  readonly departmentIdString: string;
  readonly workLocationCountryCode: string;
  readonly plannedStartDate: Date;
  readonly compensationSummary: OfferCompensationSummary;
  readonly noticePeriodDaysCount: number;
  readonly contractDocumentURI: string;
}

export interface EmployeeHiredEvent {
  readonly eventId: string;
  readonly eventCode: 'HROS.EMPLOYEE_HIRED';
  readonly occurredAt: Date;
  readonly context: HRContext;
  readonly payload: EmployeeHiredEventPayload;
}
