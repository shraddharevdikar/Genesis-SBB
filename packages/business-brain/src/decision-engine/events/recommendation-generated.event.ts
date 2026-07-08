import { RecommendationSummary } from '../recommendation/recommendation-summary.js';

export interface RecommendationGeneratedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly sessionId: string;
  readonly summary: RecommendationSummary;
  readonly timestamp: Date;
}
