export interface HRKPIValue {
  readonly currentScoreDecimalValue: number;
  readonly targetThresholdDecimalValue: number;
  readonly unitOfMeasurementString: 'PERCENTAGE_DECIMAL' | 'DAYS_COUNT' | 'CURRENCY_AMOUNT' | 'HEADCOUNT_QUANTITY';
  readonly trendIndicator: 'INCREASING_OPTIMAL' | 'DECREASING_OPTIMAL' | 'STABLE' | 'DIVERGENT_WARNING';
  readonly lastCalculatedAt: Date;
}

export interface HRKPI {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-HR-ATTRITION-ANNUAL"
  readonly displayName: string;
  readonly formulaDescriptionText: string;
  readonly scopeFilterJSON?: string;
  readonly valueRecord: HRKPIValue;
}
