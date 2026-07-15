export interface LearningContext {
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly evaluatorId: string; // Actor (system, AI evaluator, or supervisor) invoking evaluation/learning
  readonly timestamp: Date;
}
