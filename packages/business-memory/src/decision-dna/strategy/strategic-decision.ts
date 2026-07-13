import { DecisionRecord } from '../core/decision-record.js';

export interface StrategicDecision extends DecisionRecord {
  readonly alignmentWithGoalIds: string[];
  readonly coreStrategicObjective: string;
  readonly multiYearHorizonYears: number;
}
