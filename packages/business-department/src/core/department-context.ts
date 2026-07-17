import { BusinessId } from '@sbb/business-foundation';
import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface DepartmentContext {
  readonly tenantId: string;
  readonly businessId: BusinessId;
  readonly departmentInstanceId?: DepartmentInstanceId;
  readonly correlationTraceId: string;
  readonly initiatorParticipantId: string;
  readonly timestamp: Date;
}
