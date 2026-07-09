export interface RevenueRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly proposedChannelOrSegment: string;
  readonly estimatedArrImpactUSD: number;
  readonly estimatedImplementationDays: number;
  readonly riskRating: 'LOW' | 'MEDIUM' | 'HIGH';
  readonly severityLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface PricingRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly targetPricingTierName: string;
  readonly proposedPriceShiftPercent: number;
  readonly projectedMarginChangeUSD: number;
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface PipelineRecommendation {
  readonly recommendationId: string;
  readonly title: string;
  readonly description: string;
  readonly targetPipelineFrictionStage: string;
  readonly proposedMitigationPlan: string;
  readonly expectedSalesVelocityImprovementDays: number;
  readonly priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface ForecastSummary {
  readonly summaryId: string;
  readonly title: string;
  readonly description: string;
  readonly conservativeArrUSD: number;
  readonly expectedArrUSD: number;
  readonly optimisticArrUSD: number;
  readonly targetGapUSD: number; // discrepancy between quota/expectation and conservative forecast
  readonly recommendationsList: string[];
}
