import { ScheduleId } from '../identity/schedule-id.js';

export interface DeadlineRule {
  readonly deadlineRuleId: string;
  readonly scheduleId: ScheduleId;
  readonly warningThresholdMinutes: number;
  readonly criticalBreachThresholdMinutes: number;
  readonly alertOwnerIds: string[];
  readonly autoEscalateToRoleId?: string;
}
