import { ScheduleInstanceId } from '../identity/schedule-instance-id.js';

export interface SchedulingAudit {
  readonly auditId: string;
  readonly instanceId: ScheduleInstanceId;
  readonly tenantId: string;
  readonly actionPerformed: 'SCHEDULE_CREATED' | 'SCHEDULE_TRIGGERED' | 'SCHEDULE_COMPLETED' | 'SCHEDULE_MISSED' | 'SCHEDULE_CANCELLED' | 'SCHEDULE_SUSPENDED' | 'SCHEDULE_RESUMED';
  readonly actedByRoleId: string;
  readonly details: string;
  readonly payloadDelta?: Record<string, any>;
  readonly timestamp: Date;
}
