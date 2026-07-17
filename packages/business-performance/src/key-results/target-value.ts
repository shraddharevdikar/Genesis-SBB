export interface TargetValue {
  readonly startNumericValue: number;
  readonly currentNumericValue: number;
  readonly targetNumericValue: number;
  readonly measurementUnitString: string; // e.g. "CHF", "PERCENT", "HOURS"
  readonly progressPercentage: number; // calculated progress: e.g. 0.0 - 1.0 (or 0 - 100)
}
