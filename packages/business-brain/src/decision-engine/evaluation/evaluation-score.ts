import { EvaluationDimension } from './evaluation-criteria.js';

export interface EvaluationScore {
  readonly optionId: string;
  readonly dimensionScores: {
    readonly dimension: EvaluationDimension;
    readonly score: number; // 0 to 100
    readonly rationale: string;
  }[];
  readonly overallWeightedScore: number;
}
