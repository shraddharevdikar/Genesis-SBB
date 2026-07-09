export interface ArchitectureReviewedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly reviewId: string;
  readonly systemName: string;
  readonly reviewStatus: 'APPROVED' | 'REJECTED' | 'REVISION_REQUIRED';
  readonly criticalDebtAccumulatedUSD: number;
  readonly reviewer: string;
  readonly timestamp: Date;
}
