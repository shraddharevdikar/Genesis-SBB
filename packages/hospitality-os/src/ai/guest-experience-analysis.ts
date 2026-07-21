import { GuestId } from '../guests/guest.js';

export interface GuestSentimentMetric {
  readonly feedbackCategory: 'ACCOMMODATION' | 'SERVICE_STAFF' | 'DINING' | 'CLEANLINESS' | 'VALUE_FOR_MONEY';
  readonly sentimentScoreDecimal: number; // -1.0 to +1.0
  readonly highlightedExcerptText?: string;
}

export interface GuestExperienceAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "EXP-ANL-2026-STU-0042"
  readonly associatedGuestId: GuestId;
  readonly compositeSatisfactionScoreDecimal: number; // 0 to 100
  readonly categorySentimentMetricsList: GuestSentimentMetric[];
  readonly extractedKeyphraseTopicsList: string[]; // e.g. ["noisy aircon", "superb breakfast"]
  readonly recommendedServiceInterventionText?: string; // e.g. "Send complimentary wine bottle to apologize for late check-in wait"
  readonly staffAcknowledgedFlag: boolean;
  readonly calculatedAt: Date;
}
