export interface HospitalityKPI {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-HOS-OCCUPANCY-RATE", "KPI-HOS-ADR", "KPI-HOS-REVPAR", "KPI-HOS-GUEST-SATISFACTION"
  readonly displayName: string;
  readonly measuredValueDecimal: number;
  readonly unitOfMeasurementString: 'CURRENCY' | 'PERCENT' | 'RATIO' | 'SCORE_INDEX' | 'MINUTES_COUNT';
  readonly baselineTargetValueDecimal: number;
  readonly warningThresholdDecimal: number;
  readonly criticalThresholdDecimal: number;
  readonly triggerAlertFlag: boolean;
  readonly lastCalculatedAt: Date;
}
