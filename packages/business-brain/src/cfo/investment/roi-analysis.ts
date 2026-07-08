import { PaybackAnalysis } from './payback-analysis.js';

export interface ROIAnalysis {
  readonly analysisId: string;
  readonly opportunityId: string;
  readonly projectedRoiPercent: number; // e.g. 150 for 150%
  readonly netPresentValueUSD: number; // NPV
  readonly internalRateOfReturnPercent: number; // IRR
  readonly paybackAnalysis: PaybackAnalysis;
  readonly strategicAlignmentScore: number;
  readonly recommendationScore: number; // 0 to 100 ranking score
}
