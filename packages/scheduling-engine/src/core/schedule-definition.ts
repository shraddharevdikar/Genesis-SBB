import { ScheduleId } from '../identity/schedule-id.js';

export interface ScheduleDefinition {
  readonly scheduleId: ScheduleId;
  readonly tenantId: string;
  readonly name: string;
  readonly description?: string;
  readonly type: 'ONE_TIME' | 'RECURRING' | 'INTERVAL' | 'EVENT_TRIGGERED';
  readonly version: string;
  readonly timezone: string;
  readonly isActive: boolean;
  readonly createdByRoleId: string;
  readonly createdAt: Date;
}
