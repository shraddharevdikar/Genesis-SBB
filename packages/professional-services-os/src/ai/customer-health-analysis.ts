export interface HealthTrendIndicator {
  readonly clientMetricNameText: string; // e.g. "Response latency on invoice approvals"
  readonly historicalValueTrendLabel: string; // e.g. "Declining over last 90 days"
  readonly alertSeverityCode: 'INFO' | 'WARNING' | 'ALERT';
}

export interface CustomerHealthAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g., "EXP-CSM-2026-CLI-1024"
  readonly associatedClientIdString: string; // Links to Client
  readonly overallCompositeHealthIndexDecimal: number; // 0 to 100 health index
  readonly healthTrendsList: HealthTrendIndicator[];
  readonly predictedChurnProbabilityDecimal: number; // Churn risk forecast e.g. 0.42
  readonly churnRiskFactorsSummaryText?: string;
  readonly recommendedServiceInterventionText?: string; // e.g. "Schedule quarterly business review (QBR) with Partner sponsor"
  readonly customerSuccessManagerAcknowledgedFlag: boolean;
  readonly calculatedAt: Date;
}
