import { ExecutiveBrain } from '../core/contracts/executive-brain.js';
import { ExecutiveContext } from '../core/contracts/executive-context.js';
import { BusinessAnalysis } from './analysis/business-analysis.js';
import { ExecutiveSummary } from './analysis/executive-summary.js';
import { StrategicGoal } from './planning/strategic-goal.js';
import { Initiative } from './planning/initiative.js';
import { PriorityFramework } from './prioritization/priority-framework.js';
import { OpportunityScore } from './prioritization/opportunity-score.js';
import { DelegationPlan } from './delegation/delegation-plan.js';
import { ExecutiveCouncilRequest } from './coordination/executive-council-request.js';
import { ExecutiveConsensus } from './coordination/executive-consensus.js';

export interface CEOBrain extends ExecutiveBrain {
  /**
   * Evaluates corporate SWOT metrics, health indicators, and financial statuses.
   */
  analyzeBusinessState(context: ExecutiveContext, rawDepartmentMetrics: Record<string, any>): Promise<BusinessAnalysis>;

  /**
   * Outlines overarching strategic goals (Growth, Profitability, Innovation, etc.) for the company.
   */
  createStrategicGoals(context: ExecutiveContext, goalsInput: Partial<StrategicGoal>[]): Promise<StrategicGoal[]>;

  /**
   * Scores and sorts candidate corporate initiatives based on the priority framework metrics.
   */
  prioritizeInitiatives(context: ExecutiveContext, framework: PriorityFramework, initiatives: Initiative[]): Promise<OpportunityScore[]>;

  /**
   * Delegates specific assignments to COO, CFO, CTO, CMO, CRO, CHRO.
   */
  delegateWork(context: ExecutiveContext, plan: DelegationPlan): Promise<DelegationPlan>;

  /**
   * Reviews proposals and recommendations sent from specialized executive domains.
   */
  reviewExecutiveRecommendations(context: ExecutiveContext, recommendationId: string): Promise<{ approved: boolean; comments: string[] }>;

  /**
   * Compiles Departmental status cards and business analyses into a high-level executive briefing.
   */
  produceExecutiveSummary(context: ExecutiveContext, analysis: BusinessAnalysis): Promise<ExecutiveSummary>;

  /**
   * Coordinates consensus or records dissent among the C-suite for sensitive operational decisions.
   */
  conveneCouncil(context: ExecutiveContext, request: ExecutiveCouncilRequest): Promise<ExecutiveConsensus>;
}
