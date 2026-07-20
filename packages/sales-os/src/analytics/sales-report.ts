export interface PerformanceSummaryByTerritory {
  readonly territoryCode: string; // e.g. "EMEA-DACH"
  readonly salesQuotaTargetAmount: number;
  readonly closedWonRevenueAmount: number;
  readonly quotaAttainmentRatioDecimal: number; // e.g. 1.05 for 105%
  readonly activePipelineWeightedAmount: number;
  readonly totalActiveDealsCount: number;
  readonly averageDealSizeAmount: number;
}

export interface SalesReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g., "REP-PERF-2026-Q3"
  readonly displayName: string;
  readonly targetFiscalQuarterString: string; // e.g. "2026-Q3"
  readonly performanceSummariesList: PerformanceSummaryByTerritory[];
  readonly aggregateQuotaTargetAmount: number;
  readonly aggregateClosedWonRevenueAmount: number;
  readonly aggregateWeightedPipelineAmount: number;
  readonly overallQuotaAttainmentRatioBlendedDecimal: number;
  readonly strategicObservationSummaryText: string;
  readonly producedAt: Date;
}
