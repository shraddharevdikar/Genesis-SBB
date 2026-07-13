export interface FailureFactor {
  readonly factorId: string;
  readonly description: string;
  readonly rootCauseCategory: 'COGNITIVE_BIAS' | 'INCOMPLETE_DATA' | 'EXECUTION_DELAY' | 'COMMUNICATION_BREAKDOWN' | 'UNEXPECTED_EXTERNAL_EVENT';
  readonly severityRating: number;
}
