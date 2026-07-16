import { DepartmentId } from '../identity/department-id.js';
import { BusinessId } from '../identity/business-id.js';

export interface DepartmentCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly businessId: BusinessId;
  readonly departmentId: DepartmentId;
  readonly departmentName: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
