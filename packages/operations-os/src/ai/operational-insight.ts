export type OperationsInsightSeverity =
  | 'OPTIMIZATION_HINT'
  | 'WARNING_ALERT'
  | 'CRITICAL_RISK';

export interface OperationalInsight {
  readonly insightId: string;
  readonly uniqueInsightCode: string; // e.g. "INS-AI-CAPACITY-SHORTFALL"
  readonly severityLevel: OperationsInsightSeverity;
  readonly summaryNotes: string;
  readonly confidenceRatioDecimal: number; // e.g. 0.93
  readonly recommendedActionText: string;
  readonly associatedEntityIdString?: string;
  readonly isResolvedFlag: boolean;
  readonly createdAt: Date;
}
