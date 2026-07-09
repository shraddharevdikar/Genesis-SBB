export interface ExecutiveAssumption {
  readonly assumptionId: string;
  readonly statement: string;
  readonly rationale: string;
  readonly validationCriteria: string;
  readonly confidenceScore: number; // 0 to 100
  readonly isInvalidated: boolean;
  readonly invalidatedAt?: Date;
}
