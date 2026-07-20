export interface EnterpriseKPI {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-ENT-COMPOSITE-HEALTH"
  readonly displayName: string;
  readonly measuredValueDecimal: number;
  readonly unitOfMeasurementString: string; // e.g. "PERCENT", "CHF", "RATIO"
  readonly baselineTargetValueDecimal: number;
  readonly warningThresholdDecimal: number;
  readonly criticalThresholdDecimal: number;
  readonly triggerAlertFlag: boolean;
  readonly lastCalculatedAt: Date;
}
