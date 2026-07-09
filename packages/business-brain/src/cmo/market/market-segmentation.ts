export interface MarketSegment {
  readonly segmentId: string;
  readonly name: string; // e.g., "SaaS Startups", "Fortune 500 Retail"
  readonly description: string;
  readonly demographicProfile: string;
  readonly psychographicProfile: string;
  readonly behavioralProfile: string;
  readonly estimatedSizeUSD: number;
  readonly growthRatePercent: number;
  readonly attractivenessScore: number; // 0 to 100
  readonly priorityRank: number;
}

export interface MarketSegmentation {
  readonly segmentationId: string;
  readonly tenantId: string;
  readonly category: string; // e.g., "Developer Tools"
  readonly segments: MarketSegment[];
  readonly lastReviewedAt: Date;
}
