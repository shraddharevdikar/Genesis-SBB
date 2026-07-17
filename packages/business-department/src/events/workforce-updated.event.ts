import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface WorkforceUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly departmentInstanceId: DepartmentInstanceId;
  readonly addedAgentProfileIdsCount: number;
  readonly addedHumanParticipantIdsCount: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
