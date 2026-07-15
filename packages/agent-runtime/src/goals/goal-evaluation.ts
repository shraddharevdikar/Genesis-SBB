import { GoalSession } from './goal-session.js';

export interface GoalEvaluation {
  readonly evaluationId: string;
  readonly goalSessionId: string;
  readonly performanceIndex: number; // 0.0 - 1.0 (success rate)
  readonly compliancePassed: boolean;
  readonly criteriaSatisfiedCount: number;
  readonly criteriaTotalCount: number;
  readonly summaryNotes: string;
  readonly evaluatedAt: Date;
}
