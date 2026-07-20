export interface KpiValueRecord {
  readonly currentVal: number;
  readonly targetVal: number;
  readonly lastCalculatedDateTime: Date;
  readonly isStatusGreenFlag: boolean;
  readonly deviationPercentageSignedDecimal: number;
}

export interface SalesKpis {
  readonly netNewAnnualRecurringRevenueARR: KpiValueRecord;
  readonly salesWinRatePercentage: KpiValueRecord;
  readonly averageSalesCycleDurationDays: KpiValueRecord;
  readonly averageContractValueACV: KpiValueRecord;
  readonly pipelineCoverageRatio: KpiValueRecord;
  readonly grossRevenueChurnRatePercentage: KpiValueRecord;
  readonly customerExpansionRevenueARR: KpiValueRecord;
}
