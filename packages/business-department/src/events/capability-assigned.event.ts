import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface CapabilityAssignedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly departmentInstanceId: DepartmentInstanceId;
  readonly capabilityCode: string;
  readonly assignedCostCenterCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
