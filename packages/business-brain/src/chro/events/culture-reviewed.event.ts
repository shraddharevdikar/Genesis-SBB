export interface CultureReviewedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly engagementIndexPercent: number;
  readonly voluntaryAttritionRatePercent: number;
  readonly primaryCultureRisk: string;
  readonly reviewer: string;
  readonly reviewedAt: Date;
}
