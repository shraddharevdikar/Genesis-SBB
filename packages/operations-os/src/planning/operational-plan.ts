export interface OperationalPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "PLN-OPS-2026-EUR"
  readonly displayName: string;
  readonly planningFiscalYear: number;
  readonly targetThroughputMetricString: string;
  readonly budgetAllocatedAmount: number;
  readonly currencyCode: string;
  readonly isApprovedFlag: boolean;
  readonly lastReviewedAt?: Date;
  readonly createdAt: Date;
}
