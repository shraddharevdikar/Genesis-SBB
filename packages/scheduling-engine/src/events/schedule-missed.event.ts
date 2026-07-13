import { ScheduleInstanceId } from '../identity/schedule-instance-id.js';

export interface ScheduleMissedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: ScheduleInstanceId;
  readonly scheduledTime: Date;
  readonly detectedAt: Date;
  readonly delayDurationMinutes: number;
  readonly timestamp: Date;
}
