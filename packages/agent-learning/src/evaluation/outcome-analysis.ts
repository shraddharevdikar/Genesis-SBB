export interface OutcomeAnalysis {
  readonly analysisId: string;
  readonly tenantId: string;
  readonly targetExecutionId: string;
  readonly expectedOutcomeGoalText: string;
  readonly actualOutcomeSummaryText: string;
  readonly divergencePercentage: number; // 0.0 (exact match) to 100.0 (completely off course)
  readonly isDeemedSuccessful: boolean;
  readonly analyzedAt: Date;
}
