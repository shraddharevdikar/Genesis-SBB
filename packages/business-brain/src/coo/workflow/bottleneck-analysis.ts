export interface BottleneckAnalysis {
  readonly analysisId: string;
  readonly targetStageOrTaskName: string;
  readonly queueLengthEstimate: number;
  readonly delayDurationHours: number;
  readonly mainLimitingResource: string; // e.g. "Dev Capacity", "QA Lead Signoff"
  readonly overallImpact: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}
