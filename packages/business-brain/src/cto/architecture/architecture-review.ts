export interface ArchitectureReview {
  readonly reviewId: string;
  readonly tenantId: string;
  readonly systemName: string;
  readonly proposedChangesDescription: string;
  readonly modularityEvaluation: 'EXCELLENT' | 'ADEQUATE' | 'POOR';
  readonly reliabilityImpact: 'IMPROVED' | 'NEUTRAL' | 'RISKY';
  readonly scalabilityApproved: boolean;
  readonly technicalDebtIncurredUSD: number;
  readonly recommendations: string[];
  readonly status: 'APPROVED' | 'REJECTED' | 'REVISION_REQUIRED';
  readonly reviewer: string;
  readonly reviewedAt: Date;
}
