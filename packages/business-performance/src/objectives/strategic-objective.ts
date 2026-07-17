import { Objective } from './objective.js';

export interface StrategicObjective {
  readonly baseObjective: Objective;
  readonly fiveYearVisionPillarCode: string; // e.g. "DIGITAL_LEADER"
  readonly strategicWeightPercentage: number; // e.g. 0.0 - 100.0
  readonly priorityTierCode: 'TIER_1_CRITICAL' | 'TIER_2_HIGH' | 'TIER_3_MEDIUM';
}
