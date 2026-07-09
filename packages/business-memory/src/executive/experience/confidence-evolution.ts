export interface ConfidenceEvolution {
  readonly recordId: string;
  readonly evaluatedAt: Date;
  readonly previousConfidenceScore: number; // 0 to 100
  readonly newConfidenceScore: number; // 0 to 100
  readonly primaryTriggers: string[];
  readonly rationale: string;
}
