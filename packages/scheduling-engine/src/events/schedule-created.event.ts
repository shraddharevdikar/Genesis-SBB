import { ScheduleInstanceId } from '../identity/schedule-instance-id.js';

export interface ScheduleCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly scheduleId: string;
  readonly type: 'ONE_TIME' | 'RECURRING' | 'INTERVAL' | 'EVENT_TRIGGERED';
  readonly createdByRoleId: string;
  readonly timestamp: Date;
}
