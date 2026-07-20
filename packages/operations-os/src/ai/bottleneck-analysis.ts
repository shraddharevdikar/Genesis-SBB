export interface BottleneckAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "BTN-SYS-DEVOPS-PIPELINE"
  readonly targetWorkflowCodeString: string;
  readonly measuredDelayDurationMinutes: number;
  readonly primaryCauseDescriptionText: string;
  readonly congestionRatioDecimal: number; // e.g. 0.78
  readonly affectedItemsCount: number;
  readonly recommendedBufferDaysCount: number;
  readonly calculatedAt: Date;
}
