import { BalancedPerspectiveType, ScorecardMetric } from './enterprise-scorecard.js';

export interface BalancedScorecardPerspectiveSummary {
  readonly perspective: BalancedPerspectiveType;
  readonly totalWeightRatioDecimal: number; // e.g. 0.25
  readonly scorePercentageDecimal: number; // e.g. 0.88 (88% achieved)
  readonly alignedKpiCodesList: string[];
  readonly qualitativeSummaryNotes: string;
}

export interface BalancedScorecard {
  readonly scorecardId: string;
  readonly uniqueScorecardCode: string; // e.g. "BSC-GLOBAL-ANNUAL-2026"
  readonly calendarYear: number;
  readonly perspectivesSummaryList: BalancedScorecardPerspectiveSummary[];
  readonly aggregatePerformanceIndexDecimal: number;
  readonly strategicPillarFocusAreasList: string[];
  readonly approvedFlag: boolean;
  readonly calculatedAt: Date;
}
