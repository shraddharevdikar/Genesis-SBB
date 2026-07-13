import { ExpectedOutcome } from './expected-outcome.js';
import { ActualOutcome } from './actual-outcome.js';

export interface OutcomeComparison {
  readonly expected: ExpectedOutcome;
  readonly actual: ActualOutcome;
  readonly varianceAmount: number;
  readonly variancePercentage?: number;
  readonly varianceEvaluation: 'EXCEEDED' | 'MET' | 'UNDERPERFORMED' | 'FAILED';
  readonly explanation?: string;
}
