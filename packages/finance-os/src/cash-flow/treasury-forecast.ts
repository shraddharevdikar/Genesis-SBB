export interface RollingCashFlowForecastBucket {
  readonly bucketLabelString: string; // e.g. "Week of 2026-W30", "2026-M08"
  readonly startDate: Date;
  readonly endDate: Date;
  readonly expectedReceivablesInflowAmount: number;
  readonly expectedSalesInflowAmount: number;
  readonly expectedPayablesOutflowAmount: number;
  readonly expectedOpexOutflowAmount: number;
  readonly projectedNetChangeAmount: number;
  readonly projectedEndingLiquidityBalanceAmount: number;
}

export interface TreasuryForecast {
  readonly forecastId: string;
  readonly uniqueForecastCode: string; // e.g., "FOR-TRE-2026-W30-W38"
  readonly reportDate: Date;
  readonly horizonWeeksCount: number; // e.g. 12-week rolling forecast
  readonly bucketsList: RollingCashFlowForecastBucket[];
  readonly minProjectedEndingLiquidityAmount: number;
  readonly predictedCashShortfallWeekNumbersList: string[]; // Weeks where liquidity risks drop below threshold
  readonly currencyCode: string;
  readonly lastCalculatedAt: Date;
}
