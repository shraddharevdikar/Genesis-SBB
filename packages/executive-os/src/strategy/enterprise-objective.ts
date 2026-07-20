import { StrategicPlanId } from './strategic-plan.js';

export interface EnterpriseObjectiveId {
  readonly value: string;
}

export interface EnterpriseObjective {
  readonly objectiveId: EnterpriseObjectiveId;
  readonly uniqueObjectiveCode: string; // e.g. "OBJ-2026-REV-GROWTH"
  readonly associatedPlanId: StrategicPlanId;
  readonly objectiveTitleString: string;
  readonly descriptionText: string;
  readonly weightFactorDecimal: number; // e.g. 0.30 for 30% weight
  readonly baselineProgressValueDecimal: number;
  readonly currentProgressValueDecimal: number;
  readonly targetProgressValueDecimal: number;
  readonly metricUnitString: string; // e.g. "PERCENT", "CHF", "USD"
  readonly achievedFlag: boolean;
  readonly lastUpdatedAt: Date;
}
