import { ScheduleId } from '../identity/schedule-id.js';

export interface EventTriggeredSchedule {
  readonly eventTriggerId: string;
  readonly scheduleId: ScheduleId;
  readonly triggerEventName: string; // The fully-qualified name of SBB domain event
  readonly routingCriteriaEvaluator?: string; // Dynamic evaluator string to match event attributes
  readonly executionDelaySeconds: number; // Time offset to wait after event is captured
}
