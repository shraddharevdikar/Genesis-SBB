import { ScheduleInstanceId } from '../identity/schedule-instance-id.js';

export interface ScheduleTriggeredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: ScheduleInstanceId;
  readonly scheduledTime: Date;
  readonly actualTime: Date;
  readonly triggerType: 'ONE_TIME' | 'RECURRING' | 'INTERVAL' | 'EVENT_TRIGGERED';
  readonly timestamp: Date;
}
