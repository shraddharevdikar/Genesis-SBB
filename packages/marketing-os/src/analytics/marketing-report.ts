import { OriginalSourceTypeCode } from '../lead-generation/lead-source.js';

export interface PerformanceSummaryBySource {
  readonly sourceType: OriginalSourceTypeCode;
  readonly spendAmount: number;
  readonly leadsGeneratedCount: number;
  readonly closedWonCustomersCount: number;
  readonly customerAcquisitionCostAmount: number;
  readonly attributedRevenueAmount: number;
  readonly roasRatioNumeric: number;
}

export interface MarketingReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g. "REP-ROAS-Q3-2026"
  readonly displayName: string;
  readonly targetFiscalQuarterString: string; // e.g. "2026-Q3"
  readonly performanceSummariesList: PerformanceSummaryBySource[];
  readonly aggregateSpendAmount: number;
  readonly aggregateLeadsCount: number;
  readonly aggregateRevenueAmount: number;
  readonly netRoasRatioBlended: number;
  readonly keyObservationsSummaryText: string;
  readonly producedAt: Date;
}
