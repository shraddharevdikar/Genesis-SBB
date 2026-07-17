import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface DepartmentRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly departmentInstanceId: DepartmentInstanceId;
  readonly offboardedAgentCount: number;
  readonly offboardedHumanStaffCount: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
