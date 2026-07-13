import { DecisionRecord } from '../core/decision-record.js';

export interface OperationalDecision extends DecisionRecord {
  readonly targetProcessIds: string[];
  readonly targetSystemIds: string[];
  readonly estimatedEfficiencyGainPercent?: number;
}
