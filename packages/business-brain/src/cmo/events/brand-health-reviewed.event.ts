import { SentimentRatio } from '../brand/brand-health.js';

export interface BrandHealthReviewedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly brandHealthId: string;
  readonly netPromoterScore: number;
  readonly customerTrustIndex: number;
  readonly sentimentRatio: SentimentRatio;
  readonly reviewedAt: Date;
}
