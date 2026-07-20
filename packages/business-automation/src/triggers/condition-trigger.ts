import { AutomationTrigger } from './automation-trigger.js';

export interface ConditionTrigger extends AutomationTrigger {
  readonly evaluatedConditionIdString: string; // references automation-condition
  readonly minimumRecheckCooldownMinutesCount: number; // throttling frequency
  readonly targetEvaluationThresholdValue?: number; // e.g. ARR < 100000
}
