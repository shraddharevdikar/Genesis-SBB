import { RecommendationId } from '../identity/recommendation-id.js';
import { RecommendationPriority } from './recommendation-priority.js';
import { RecommendationImpact } from './recommendation-impact.js';

export type RecommendationCategoryCode =
  | 'STRATEGIC_DIRECTION'
  | 'OPERATIONAL_ADJUSTMENT'
  | 'FINANCIAL_BUDGETARY_ALLOCATION'
  | 'COMPLIANCE_DISCLOSURE_ACTION'
  | 'AI_AGENT_WORKFORCE_SCALE';

export interface BusinessRecommendation {
  readonly recommendationId: RecommendationId;
  readonly uniqueRecommendationCode: string; // e.g. "REC-FIN-BUDGET-REDUCE"
  readonly displayName: string;
  readonly detailedDescriptionText: string;
  readonly category: RecommendationCategoryCode;
  readonly priority: RecommendationPriority;
  readonly expectedImpact: RecommendationImpact;
  readonly sourceInsightIdStringList: string[]; // links to business-insight
  readonly potentialAutomationActionCode?: string; // links to packages/business-automation
  readonly isRejectedFlag: boolean;
  readonly isAppliedFlag: boolean;
  readonly generatedAt: Date;
}
