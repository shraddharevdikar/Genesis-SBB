import { ExecutionStep } from './execution-step.js';

export interface DecisionPoint {
  readonly decisionId: string;
  readonly planId: string;
  readonly evaluatingStep: ExecutionStep;
  readonly decisionForkType: 'CONDITIONAL_BRANCH' | 'HUMAN_APPROVAL_ESC' | 'RETRY_WITH_BACKOFF' | 'ABORT';
  readonly conditionStatement: string; // e.g. "If balance discrepancy exceeds 100 CHF"
  readonly resolvedRouteStepId?: string;
  readonly explanationJustification: string; // AI Agent thought log explanation
  readonly resolvedAt?: Date;
}
