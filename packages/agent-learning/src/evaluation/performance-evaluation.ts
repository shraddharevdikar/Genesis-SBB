export interface PerformanceEvaluation {
  readonly evaluationId: string;
  readonly tenantId: string;
  readonly targetAgentId: string; // The SBB digital employee evaluated
  readonly executionSessionId: string;
  readonly efficiencyScore: number; // 0.0 - 1.0 based on actual vs planned duration
  readonly accuracyScore: number; // 0.0 - 1.0 based on outcome fidelity
  readonly resourceUtilizationRatio: number; // VM nodes / budget usage factor
  readonly safetyAdherenceScore: number; // Trust score penalty calculation factor
  readonly evaluatedAt: Date;
}
