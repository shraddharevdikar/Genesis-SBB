export interface RetailKPI {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-RTL-GMV" or "KPI-RTL-AOV" or "KPI-RTL-CART-ABANDONMENT"
  readonly displayName: string;
  readonly measuredValueDecimal: number;
  readonly unitOfMeasurementString: string; // e.g. "CURRENCY", "PERCENT", "UNITS", "RATIO"
  readonly baselineTargetValueDecimal: number;
  readonly warningThresholdDecimal: number;
  readonly criticalThresholdDecimal: number;
  readonly triggerAlertFlag: boolean;
  readonly lastCalculatedAt: Date;
}
