import { HRContext } from '../core/hr-context.js';
import { EmployeeId } from '../employees/employee.js';

export interface EmployeeExitedEventPayload {
  readonly employeeId: EmployeeId;
  readonly lastWorkingDayDate: Date;
  readonly exitReasonCode: 'VOLUNTARY' | 'INVOLUNTARY_PERFORMANCE' | 'INVOLUNTARY_REDUNDANCY' | 'RETIREMENT';
  readonly severanceWeeksGrantedCount: number;
  readonly isEligibleForRehireFlag: boolean;
}

export interface EmployeeExitedEvent {
  readonly eventId: string;
  readonly eventCode: 'HROS.EMPLOYEE_EXITED';
  readonly occurredAt: Date;
  readonly context: HRContext;
  readonly payload: EmployeeExitedEventPayload;
}
