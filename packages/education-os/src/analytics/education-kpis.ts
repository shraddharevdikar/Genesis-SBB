export interface EducationKPI {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-EDU-RETENTION-RATE" or "KPI-EDU-AVERAGE-GPA" or "KPI-EDU-STUDENT-FACULTY-RATIO"
  readonly displayName: string;
  readonly measuredValueDecimal: number;
  readonly unitOfMeasurementString: 'CURRENCY' | 'PERCENT' | 'UNITS' | 'RATIO' | 'GPA_POINTS';
  readonly baselineTargetValueDecimal: number;
  readonly warningThresholdDecimal: number;
  readonly criticalThresholdDecimal: number;
  readonly triggerAlertFlag: boolean;
  readonly lastCalculatedAt: Date;
}
