import { ScheduleInstanceId } from '../identity/schedule-instance-id.js';
import { ScheduleStatus } from './schedule-instance.js';

export interface ScheduleLifecycle {
  readonly instanceId: ScheduleInstanceId;
  readonly tenantId: string;
  readonly allowedTransitions: Array<{
    readonly from: ScheduleStatus;
    readonly to: ScheduleStatus[];
  }>;
  readonly lastStateTransitionAt: Date;
  readonly isFinalized: boolean;
}
