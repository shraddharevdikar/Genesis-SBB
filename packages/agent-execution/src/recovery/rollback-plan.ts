export interface RollbackStep {
  readonly rollbackStepId: string;
  readonly sequenceNumber: number;
  readonly compensatingActionDescription: string;
  readonly expectedOutputSchema?: string;
  readonly targetSkillUri?: string;
}

export interface RollbackPlan {
  readonly planId: string;
  readonly targetExecutionId: string;
  readonly failedStepId: string;
  readonly compensatingStepsList: RollbackStep[];
  readonly totalEstimatedRollbackDurationMinutes: number;
  readonly isRollbackComplete: boolean;
}
