import { RecommendationId } from '../identity/recommendation-id.js';

export interface RecommendationCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly recommendationId: RecommendationId;
  readonly uniqueRecommendationCode: string;
  readonly displayName: string;
  readonly categoryCode: string;
  readonly priorityCode: string;
  readonly expectedFinancialGainValue?: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
