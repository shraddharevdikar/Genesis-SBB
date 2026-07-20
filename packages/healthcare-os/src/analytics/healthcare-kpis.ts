export interface HealthcareKPI {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-HC-AVERAGE-LENGTH-OF-STAY" or "KPI-HC-READMISSION-RATE-30D"
  readonly displayName: string;
  readonly measuredValueDecimal: number;
  readonly unitOfMeasurementString: string; // e.g. "DAYS", "PERCENT", "CHF", "HOURS"
  readonly baselineTargetValueDecimal: number;
  readonly warningThresholdDecimal: number;
  readonly criticalThresholdDecimal: number;
  readonly triggerAlertFlag: boolean;
  readonly lastCalculatedAt: Date;
}
