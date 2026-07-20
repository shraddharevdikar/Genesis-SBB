export interface LegalKPI {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-LEG-COMPLIANCE-RATE"
  readonly displayName: string;
  readonly measuredValueDecimal: number;
  readonly unitOfMeasurementString: string; // e.g. "PERCENT", "DAYS", "COUNT"
  readonly baselineTargetValueDecimal: number;
  readonly warningThresholdDecimal: number;
  readonly criticalThresholdDecimal: number;
  readonly triggerAlertFlag: boolean;
  readonly lastCalculatedAt: Date;
}
