import { AutomationTrigger } from './automation-trigger.js';

export interface ScheduleTrigger extends AutomationTrigger {
  readonly cronExpressionString?: string; // e.g. "0 9 * * 1-5"
  readonly executionDelayMinutesCount?: number;
  readonly associatedScheduleIdString: string; // references automation-schedule
}
