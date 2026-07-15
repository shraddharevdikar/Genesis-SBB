export interface GovernanceMetrics {
  readonly metricId: string;
  readonly tenantId: string;
  readonly totalEvaluatedDecisionsCount: number;
  readonly approvedWithoutApprovalsCount: number;
  readonly triggeredMandatoryApprovalsCount: number;
  readonly rejectedViolationsCount: number;
  readonly averagePolicyEvaluationLatencyMs: number;
  readonly computedAt: Date;
}
