export interface IndividualPartnerKPI {
  readonly partnerId: string;
  readonly partnerName: string;
  readonly partnerType: 'CHANNEL_PARTNER' | 'SYSTEM_INTEGRATOR' | 'ALLIANCE' | 'REFERRAL' | 'MARKETPLACE';
  readonly partnerSourcedOppsCount: number;
  readonly partnerSourcedPipelineUSD: number;
  readonly closedWonRevenueUSD: number;
  readonly partnerSatisfactionScore: number; // e.g. 0 to 100
}

export interface PartnerPerformance {
  readonly performanceId: string;
  readonly tenantId: string;
  readonly period: string; // e.g. "Q2-2026"
  readonly overallPartnerContributionPercent: number; // partner-driven ARR / total ARR
  readonly totalPartnerInfluencedRevenueUSD: number;
  readonly partnersKPIsList: IndividualPartnerKPI[];
  readonly lastReviewedAt: Date;
}
