import { ExecutiveBrain } from '../core/contracts/executive-brain.js';
import { ExecutiveContext } from '../core/contracts/executive-context.js';
import { OperationalHealth } from './operations/operational-health.js';
import { OperationalReadiness } from './operations/operational-readiness.js';
import { ResourcePlan } from './resources/resource-plan.js';
import { ExecutionPlan } from './execution/execution-plan.js';
import { WorkflowAssessment } from './workflow/workflow-assessment.js';
import { DeliverySummary } from './advisory/operational-recommendation.js';
import { ExecutiveOperationalSummary } from './advisory/executive-operational-summary.js';
import { ExecutionPolicy } from './governance/execution-policy.js';
import { ExecutionRecommendation, CapacityRecommendation } from './advisory/operational-recommendation.js';

export interface COOBrain extends ExecutiveBrain {
  /**
   * Assesses corporate operational health including process health, delivery health, utilization, and SLA compliance.
   */
  assessOperationalHealth(context: ExecutiveContext): Promise<OperationalHealth>;

  /**
   * Evaluates operational readiness for a given target objective.
   */
  assessOperationalReadiness(context: ExecutiveContext, objective: string): Promise<OperationalReadiness>;

  /**
   * Evaluates the execution capabilities of the current operational setup.
   */
  evaluateExecutionCapability(context: ExecutiveContext, plan: ExecutionPlan): Promise<ExecutionRecommendation>;

  /**
   * Reviews team and resource capacities under the current allocations.
   */
  reviewCapacity(context: ExecutiveContext, plan: ResourcePlan): Promise<CapacityRecommendation>;

  /**
   * Analyzes processes to detect efficiency bottlenecks, delays, or waste.
   */
  detectBottlenecks(context: ExecutiveContext, assessment: WorkflowAssessment): Promise<WorkflowAssessment>;

  /**
   * Optimizes resource allocation across different operational units.
   */
  optimizeResourceAllocation(
    context: ExecutiveContext,
    plan: ResourcePlan,
    policy: ExecutionPolicy
  ): Promise<ResourcePlan>;

  /**
   * Reviews the ongoing status of milestones, SLAs, and blocker counts across active deliveries.
   */
  reviewDeliveryHealth(context: ExecutiveContext): Promise<DeliverySummary>;

  /**
   * Produces a unified, high-level operational briefing report summarizing health, risks, and recommendations.
   */
  produceExecutiveOperationalSummary(context: ExecutiveContext, health: OperationalHealth): Promise<ExecutiveOperationalSummary>;
}
