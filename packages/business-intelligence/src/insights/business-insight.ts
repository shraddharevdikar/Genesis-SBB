import { InsightId } from '../identity/insight-id.js';

export type InsightCategoryCode =
  | 'TREND_PATTERNS'
  | 'COGNITIVE_ANOMALY'
  | 'ROOT_CAUSE_EXPLANATION'
  | 'CORRELATION_PAIRING'
  | 'OPPORTUNITY_DETECTION'
  | 'RISK_VULNERABILITY';

export interface BusinessInsight {
  readonly insightId: InsightId;
  readonly uniqueInsightCode: string; // e.g. "INS-ARR-LEAK"
  readonly displayName: string;
  readonly summaryDescriptionText: string;
  readonly category: InsightCategoryCode;
  readonly confidenceScoreRatio: number; // e.g. 0.94 (94%)
  readonly affectedResourceURI: string; // e.g. "kpi://finance/arr" or "workflow://invoice"
  readonly generatedAt: Date;
  readonly isArchivedFlag: boolean;
}
