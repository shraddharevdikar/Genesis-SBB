export interface ConfidenceRange {
  readonly confidenceIntervalPercentageValue: number; // e.g. 95 for 95% confidence
  readonly calculatedLowerBoundValue: number;
  readonly expectedMedianValue: number;
  readonly calculatedUpperBoundValue: number;
  readonly marginOfErrorAbsoluteValue: number;
  readonly unitOfMeasurementString: string; // e.g. "CHF" or "RECURRING_LICENSES"
}
