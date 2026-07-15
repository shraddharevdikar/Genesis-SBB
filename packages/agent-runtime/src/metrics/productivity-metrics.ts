export interface ProductivityMetrics {
  readonly productivityId: string;
  readonly tenantId: string;
  readonly agentId: string;
  readonly goalsAssignedCount: number;
  readonly goalsCompletedCount: number;
  readonly decisionAccuracyRatio: number; // 0.0 - 1.0 (correct vs corrected decisions ratio)
  readonly activeBusyRatio: number; // 0.0 - 1.0
  readonly calculatedAt: Date;
}
