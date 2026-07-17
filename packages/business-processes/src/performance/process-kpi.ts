export interface ProcessKpi {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-CYCLE-TIME"
  readonly title: string;
  readonly metricFormulaText: string;
  readonly acceptableRangeTargetMinimumValue: number;
  readonly maximumWarningThresholdLimit: number;
}
