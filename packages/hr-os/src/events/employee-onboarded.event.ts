import { HRContext } from '../core/hr-context.js';
import { EmployeeId } from '../employees/employee.js';

export interface EmployeeOnboardedEventPayload {
  readonly employeeId: EmployeeId;
  readonly associatedOnboardingPlanIdString: string;
  readonly completedDate: Date;
  readonly probationaryPeriodActiveFlag: boolean;
  readonly modulesCompletedCount: number;
}

export interface EmployeeOnboardedEvent {
  readonly eventId: string;
  readonly eventCode: 'HROS.EMPLOYEE_ONBOARDED';
  readonly occurredAt: Date;
  readonly context: HRContext;
  readonly payload: EmployeeOnboardedEventPayload;
}
