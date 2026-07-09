export interface GrowthOpportunity {
  readonly opportunityId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly description: string;
  readonly estimatedUpliftRevenueUSD: number;
  readonly requiredInvestmentUSD: number;
  readonly customerCohortId: string;
  readonly conversionImprovementBasisPoints: number; // e.g. 150 (for 1.5%)
  readonly priorityRating: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly confidenceScore: number; // 0.0 to 1.0 or 0 to 100
  readonly detectedAt: Date;
}
