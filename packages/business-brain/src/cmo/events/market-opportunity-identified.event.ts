export interface MarketOpportunityIdentifiedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly opportunityId: string;
  readonly title: string;
  readonly projectedRevenueUSD: number;
  readonly targetSegmentId: string;
  readonly identifiedAt: Date;
}
