export interface OperationsKPI {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-OPS-CYCLE-TIME"
  readonly displayName: string;
  readonly measuredValueDecimal: number;
  readonly unitOfMeasurementString: string; // e.g. "DAYS", "HOURS", "PERCENT"
  readonly baselineTargetValueDecimal: number;
  readonly warningThresholdDecimal: number;
  readonly criticalThresholdDecimal: number;
  readonly triggerAlertFlag: boolean;
  readonly lastCalculatedAt: Date;
}
