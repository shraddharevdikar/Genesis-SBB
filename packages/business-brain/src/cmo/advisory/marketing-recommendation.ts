export interface MarketingRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly targetChannelOrCampaign: string;
  readonly proposedBudgetUSD: number;
  readonly estimatedCacReductionPercent: number;
  readonly riskRating: 'LOW' | 'MEDIUM' | 'HIGH';
  readonly severityLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface BrandRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly focusPillar: string;
  readonly positioningShiftRequired: boolean;
  readonly estimatedRebrandingCostUSD: number;
  readonly anticipatedTrustUpliftScore: number; // 0 to 100
  readonly severityLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface GrowthRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly growthUpliftStrategy: string;
  readonly estimatedImplementationWeeks: number;
  readonly targetAcquisitionCountUplift: number;
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface MarketOpportunitySummary {
  readonly summaryId: string;
  readonly title: string;
  readonly description: string;
  readonly targetSegment: string;
  readonly projectedTamUSD: number;
  readonly recommendationAction: 'PURSUE' | 'MONITOR' | 'PASS';
  readonly estimatedTimeWindowMonths: number;
}
