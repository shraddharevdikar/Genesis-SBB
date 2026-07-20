export interface RealEstateProjectKPI {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-RE-CARPET-AREA-EFFICIENCY"
  readonly displayName: string;
  readonly measuredValueDecimal: number;
  readonly unitOfMeasurementString: string; // e.g. "PERCENT", "CHF", "SQUARE_FEET"
  readonly baselineTargetValueDecimal: number;
  readonly warningThresholdDecimal: number;
  readonly criticalThresholdDecimal: number;
  readonly triggerAlertFlag: boolean;
  readonly lastCalculatedAt: Date;
}
