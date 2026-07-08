import { Recommendation } from './recommendation.js';

export interface RecommendationSummary {
  readonly summaryId: string;
  readonly sessionId: string;
  readonly preferredOptionId: string;
  readonly preferredOptionName: string;
  readonly alternativesConsideredIds: string[];
  readonly executiveSummaryText: string;
  readonly recommendationsList: Recommendation[];
  readonly compiledAt: Date;
}
