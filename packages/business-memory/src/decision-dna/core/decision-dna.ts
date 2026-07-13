import { DecisionContext } from './decision-context.js';
import { DecisionRecord } from './decision-record.js';
import { Assumption } from '../analysis/assumption.js';
import { Alternative } from '../analysis/alternative.js';
import { Evidence } from '../analysis/evidence.js';
import { ActualOutcome } from '../outcomes/actual-outcome.js';
import { OutcomeComparison } from '../outcomes/outcome-comparison.js';
import { LessonLearned } from '../learning/lesson-learned.js';
import { DecisionPattern } from '../learning/decision-pattern.js';

export interface DecisionDNA {
  /**
   * Registers a new strategic, tactical, or operational decision record.
   */
  recordDecision(
    context: DecisionContext,
    decision: Partial<DecisionRecord>
  ): Promise<DecisionRecord>;

  /**
   * Binds underlying critical assumptions to a specific decision record.
   */
  recordAssumptions(
    context: DecisionContext,
    decisionId: string,
    assumptions: Assumption[]
  ): Promise<DecisionRecord>;

  /**
   * Documents evaluated alternative choices and trade-offs.
   */
  recordAlternatives(
    context: DecisionContext,
    decisionId: string,
    alternatives: Alternative[]
  ): Promise<DecisionRecord>;

  /**
   * Links objective supporting research, financial forecasts, or telemetry logs as evidence.
   */
  recordEvidence(
    context: DecisionContext,
    decisionId: string,
    evidence: Evidence[]
  ): Promise<DecisionRecord>;

  /**
   * Documents an actual business outcome observed in the wild.
   */
  recordOutcome(
    context: DecisionContext,
    decisionId: string,
    outcome: ActualOutcome
  ): Promise<DecisionRecord>;

  /**
   * Compares the actual observed outcome against the originally projected expected outcomes.
   */
  compareOutcome(
    context: DecisionContext,
    decisionId: string,
    metricName: string
  ): Promise<OutcomeComparison>;

  /**
   * Captures organizational learnings and success/failure factor patterns from a decision retrospective.
   */
  captureLessons(
    context: DecisionContext,
    decisionId: string,
    lessons: LessonLearned[]
  ): Promise<DecisionRecord>;

  /**
   * Correlates decisions across the tenant to identify reusable, historic decision patterns.
   */
  identifyPatterns(
    context: DecisionContext,
    tags?: string[]
  ): Promise<DecisionPattern[]>;
}
