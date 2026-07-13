import { ScheduleInstanceId } from '../identity/schedule-instance-id.js';
import { ScheduleId } from '../identity/schedule-id.js';

export type ScheduleStatus = 'PENDING' | 'ACTIVE' | 'TRIGGERED' | 'SUSPENDED' | 'COMPLETED' | 'MISSED' | 'CANCELLED';

export interface ScheduleInstance {
  readonly instanceId: ScheduleInstanceId;
  readonly scheduleId: ScheduleId;
  readonly tenantId: string;
  readonly status: ScheduleStatus;
  readonly nextExecutionAt?: Date;
  readonly lastExecutedAt?: Date;
  readonly totalExecutionsCount: number;
  readonly startedAt: Date;
  readonly completedAt?: Date;
}
