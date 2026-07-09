export interface MarketOpportunity {
  readonly opportunityId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly description: string;
  readonly targetSegmentId: string;
  readonly projectedRevenueUSD: number;
  readonly estimatedCACUSD: number; // Customer Acquisition Cost
  readonly windowOfOpportunity: string; // e.g., "Next 12-18 months"
  readonly urgencyRating: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly strategicAlignmentScore: number; // e.g., 0 to 100
  readonly isApproved: boolean;
  readonly createdAt: Date;
}
