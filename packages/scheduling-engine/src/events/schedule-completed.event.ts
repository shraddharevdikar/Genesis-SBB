import { ScheduleInstanceId } from '../identity/schedule-instance-id.js';

export interface ScheduleCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly instanceId: ScheduleInstanceId;
  readonly outcome: 'SUCCESS' | 'WARNINGS' | 'RETRIED_SUCCESS';
  readonly completedAt: Date;
  readonly durationSeconds: number;
  readonly timestamp: Date;
}
