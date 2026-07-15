export interface FailureFactor {
  readonly code: string; // e.g. "SBB_API_TIMEOUT" or "RESOURCE_UNAVAILABLE"
  readonly description: string;
  readonly estimatedWeight: number; // 0.0 - 1.0 (proportion of blame for failure)
}

export interface RootCauseAnalysis {
  readonly analysisId: string;
  readonly targetExecutionId: string;
  readonly failedStepId?: string;
  readonly rawErrorMessageText: string;
  readonly primaryFailureFactor: FailureFactor;
  readonly contributingFactorsList: FailureFactor[];
  readonly remedialActionNotes: string;
  readonly analyzedAt: Date;
}
