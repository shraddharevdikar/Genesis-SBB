export interface ContributionMetrics {
  readonly metricsId: string;
  readonly tenantId: string;
  readonly totalContributionsCount: number;
  readonly approvedContributionsCount: number;
  readonly duplicatedContributionsRejectedCount: number;
  readonly avgStatedAgentConfidenceRatio: number; // 0.0 - 1.0 average
  readonly timestamp: Date;
}
