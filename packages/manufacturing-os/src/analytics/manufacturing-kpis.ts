export interface ManufacturingKPI {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-MFG-OEE" or "KPI-MFG-SCRAP-RATE-PERCENT" or "KPI-MFG-MTTR-HOURS"
  readonly displayName: string;
  readonly measuredValueDecimal: number;
  readonly unitOfMeasurementString: string; // e.g. "PERCENT", "HOURS", "UNITS", "CHF"
  readonly baselineTargetValueDecimal: number;
  readonly warningThresholdDecimal: number;
  readonly criticalThresholdDecimal: number;
  readonly triggerAlertFlag: boolean;
  readonly lastCalculatedAt: Date;
}
