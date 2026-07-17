import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface DepartmentEstablishedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly businessId: string;
  readonly departmentInstanceId: DepartmentInstanceId;
  readonly name: string;
  readonly costCenterCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
