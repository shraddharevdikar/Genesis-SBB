import { DecisionSession } from './decision-session.js';
import { DecisionOption } from '../alternatives/decision-option.js';
import { OptionComparison } from '../alternatives/option-comparison.js';
import { EvaluationCriteria } from '../evaluation/evaluation-criteria.js';
import { EvaluationScore } from '../evaluation/evaluation-score.js';
import { TradeoffAnalysis } from '../evaluation/tradeoff-analysis.js';
import { ConfidenceModel } from '../confidence/confidence-model.js';
import { RiskAssessment } from '../risk/risk-assessment.js';
import { RecommendationSummary } from '../recommendation/recommendation-summary.js';
import { DecisionPolicy } from '../governance/decision-policy.js';

export interface ExecutiveDecisionEngine {
  readonly engineId: string;
  readonly name: string;

  /**
   * Evaluates options against the defined criteria.
   */
  evaluate(
    session: DecisionSession,
    options: DecisionOption[],
    criteria: EvaluationCriteria[]
  ): Promise<EvaluationScore[]>;

  /**
   * Compares options side-by-side on various performance vectors.
   */
  compareOptions(
    session: DecisionSession,
    options: DecisionOption[]
  ): Promise<OptionComparison>;

  /**
   * Evaluates a comparative tradeoff analysis highlighting winner/loser trade-offs.
   */
  analyzeTradeoffs(
    session: DecisionSession,
    comparison: OptionComparison,
    scores: EvaluationScore[]
  ): Promise<TradeoffAnalysis>;

  /**
   * Assesses the risk profile of each given option.
   */
  assessRisk(
    session: DecisionSession,
    options: DecisionOption[]
  ): Promise<RiskAssessment[]>;

  /**
   * Computes unified decision confidence based on evidence reliability and missing data.
   */
  calculateConfidence(
    session: DecisionSession,
    optionId: string
  ): Promise<ConfidenceModel>;

  /**
   * Compiles evaluations, comparisons, risks, and confidence scores into a structured recommendation.
   */
  generateRecommendation(
    session: DecisionSession,
    policy: DecisionPolicy,
    scores: EvaluationScore[],
    comparisons: OptionComparison,
    risks: RiskAssessment[]
  ): Promise<RecommendationSummary>;
}
