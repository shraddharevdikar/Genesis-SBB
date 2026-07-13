import { ScheduleInstanceId } from '../identity/schedule-instance-id.js';

export interface ScheduleCancelledEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: ScheduleInstanceId;
  readonly cancelledByRoleId: string;
  readonly reason: string;
  readonly timestamp: Date;
}
