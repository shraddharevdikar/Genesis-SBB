export interface PricingReviewedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly strategyId: string;
  readonly strategyName: string;
  readonly reviewer: string;
  readonly reviewResult: 'APPROVED' | 'REJECTED' | 'REVISION_REQUIRED';
  readonly targetedProfitMarginPercent: number;
  readonly reviewedAt: Date;
}
