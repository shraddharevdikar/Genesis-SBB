import { DecisionOutcome } from './decision-outcome.js';

export interface RememberedDecision {
  readonly decisionId: string;
  readonly title: string;
  readonly decisionDescription: string;
  readonly businessRationale: string;
  readonly activeAlternativesConsidered: string[];
  readonly originalConfidenceScore: number; // 0 to 100
  readonly approvedBy: string; // role or executive ID
  readonly decidedAt: Date;
  readonly outcomeEvaluations: DecisionOutcome[];
  readonly evidenceLinks: string[];
  readonly followUpItems: string[];
}
