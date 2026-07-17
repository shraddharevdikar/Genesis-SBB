export interface BudgetAuthority {
  readonly budgetId: string;
  readonly fiscalYearCode: string; // e.g. "FY2026"
  readonly overallLimitChf: number;
  readonly remainingBufferChf: number;
  readonly warningTriggerThresholdRatio: number; // e.g. 0.85 (warns at 85% utilization)
  readonly requiresDoubleSignatureLimitChf: number;
}
