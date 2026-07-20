import { InsightId } from '../identity/insight-id.js';

export interface InsightGeneratedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly insightId: InsightId;
  readonly uniqueInsightCode: string;
  readonly displayName: string;
  readonly categoryCode: string;
  readonly confidenceScoreRatio: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
