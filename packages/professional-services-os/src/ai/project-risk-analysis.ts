export interface ProjectRiskFactor {
  readonly factorLabelText: string; // e.g. "Slipping Milestone Deadlines", "High Unbilled Time Accumulation"
  readonly severityLevel: 'LOW_RISK' | 'MEDIUM_CONCERN' | 'HIGH_ALERT';
  readonly metricValueText: string;
}

export interface ProjectRiskAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g., "OPT-RSK-2026-CLOUD-ACME"
  readonly associatedProjectIdString: string; // Links to Project
  readonly overallRiskScoreDecimal: number; // e.g. 0.72 for 72% failure risk
  readonly identifiedRiskFactorsList: ProjectRiskFactor[];
  readonly dynamicRemediationAdviceText: string; // e.g. "Add Managing Consultant as oversight; immediately schedule client billing milestone"
  readonly projectManagerAcknowledgedFlag: boolean;
  readonly calculatedAt: Date;
}
