export interface SentimentRatio {
  readonly positivePercent: number; // e.g., 65
  readonly neutralPercent: number;  // e.g., 20
  readonly negativePercent: number; // e.g., 15
}

export interface BrandHealth {
  readonly brandHealthId: string;
  readonly tenantId: string;
  readonly brandName: string;
  readonly brandAwarenessPercent: number; // 0 to 100
  readonly brandEquityScore: number;       // e.g., 0 to 100
  readonly customerTrustIndex: number;     // e.g., 0.0 to 1.0 or 0 to 100
  readonly netPromoterScore: number;       // e.g., -100 to 100
  readonly sentimentRatio: SentimentRatio;
  readonly keyReputationalRisks: string[];
  readonly assessedAt: Date;
}
