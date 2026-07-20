export interface OperationalObjective {
  readonly objectiveId: string;
  readonly uniqueObjectiveCode: string; // e.g. "OBJ-OPS-REDUCE-LATENCY"
  readonly associatedPlanIdString: string;
  readonly descriptionText: string;
  readonly targetValueDecimal: number;
  readonly currentCompletedValueDecimal: number;
  readonly unitOfMeasurementString: string; // e.g. "MS", "PERCENT", "UNITS"
  readonly targetCompletionDate: Date;
  readonly importanceWeightDecimal: number; // e.g. 0.35
  readonly activeFlag: boolean;
}
