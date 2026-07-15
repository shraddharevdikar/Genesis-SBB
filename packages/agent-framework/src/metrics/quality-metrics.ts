export interface QualityMetrics {
  readonly metricsId: string;
  readonly agentId: string;
  readonly tenantId: string;
  readonly successRatePercentage: number;
  readonly humanInterventionsCount: number; // Frequency of human corrections needed
  readonly complianceBypassTriggersCount: number;
  readonly averageValidationScore: number; // 0.0 - 1.0 confidence/accuracy score
  readonly calculatedAt: Date;
}
