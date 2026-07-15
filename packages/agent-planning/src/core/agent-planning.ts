import { BusinessGoal } from '../goals/business-goal.js';
import { ObjectiveAnalysis } from '../goals/objective-analysis.js';
import { ExecutionPlan } from '../planning/execution-plan.js';
import { PlanId } from '../identity/plan-id.js';
import { AlternativePlan } from '../planning/alternative-plan.js';
import { RiskAssessment } from '../risk/risk-assessment.js';
import { ResourceOptimization } from '../optimization/resource-optimization.js';
import { TimelineOptimization } from '../optimization/timeline-optimization.js';
import { CostOptimization } from '../optimization/cost-optimization.js';
import { ApprovalGate } from '../approval/approval-gate.js';
import { PlanningContext } from './planning-context.js';

export interface AgentPlanning {
  /**
   * Decomposes high-level business goals into specific actionable sub-objectives.
   */
  analyzeGoal(
    tenantId: string,
    goal: BusinessGoal,
    context: PlanningContext
  ): Promise<ObjectiveAnalysis>;

  /**
   * Drafts an execution plan structure complete with sequencing, execution steps, and decision branches.
   */
  buildPlan(
    tenantId: string,
    goalId: string,
    analysisId: string,
    context: PlanningContext
  ): Promise<ExecutionPlan>;

  /**
   * Generates alternative pathway solutions, grading them on resource, timeline, and compliance metrics.
   */
  evaluateAlternatives(
    tenantId: string,
    basePlanId: PlanId,
    context: PlanningContext
  ): Promise<AlternativePlan[]>;

  /**
   * Assesses operational risks, establishing mitigation strategies and contingency triggers.
   */
  assessRisk(
    tenantId: string,
    planId: PlanId,
    context: PlanningContext
  ): Promise<RiskAssessment[]>;

  /**
   * Optimizes the timeline, cost, and resource allocation mapping across the draft plan.
   */
  optimizePlan(
    tenantId: string,
    planId: PlanId,
    context: PlanningContext
  ): Promise<{
    readonly resource: ResourceOptimization;
    readonly timeline: TimelineOptimization;
    readonly cost: CostOptimization;
  }>;

  /**
   * Enforces compliance policies and lock reviews into approval gates for human operators or board review.
   */
  submitForApproval(
    tenantId: string,
    planId: PlanId,
    gateId: string,
    context: PlanningContext
  ): Promise<ApprovalGate>;
}
