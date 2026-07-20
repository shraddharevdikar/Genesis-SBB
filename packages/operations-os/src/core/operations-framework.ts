import { OperationsContext } from './operations-context.js';
import { OperationalPlan } from '../planning/operational-plan.js';
import { Project } from '../projects/project.js';
import { WorkOrder } from '../work-management/work-order.js';
import { OperationsResource } from '../resources/resource.js';
import { CapacityPlan } from '../resources/capacity-plan.js';
import { QualityInspection } from '../quality/quality-inspection.js';
import { OperationalInsight } from '../ai/operational-insight.js';

export interface OperationsFramework {
  /**
   * Translates long-term business goals and targets into an OperationalPlan.
   */
  planOperations(
    uniquePlanCode: string,
    displayName: string,
    planningFiscalYear: number,
    targetThroughputMetricString: string,
    budgetAllocatedAmount: number,
    currencyCode: string,
    context: OperationsContext
  ): Promise<OperationalPlan>;

  /**
   * Kicks off a new project delivery track under a specific operational plan.
   */
  createProject(
    uniqueProjectCode: string,
    displayName: string,
    businessSponsorRoleIdString: string,
    projectManagerRoleIdString: string,
    plannedStartDate: Date,
    plannedEndDate: Date,
    estBudgetCostAmount: number,
    currencyCode: string,
    context: OperationsContext
  ): Promise<Project>;

  /**
   * Creates a formal internal or supplier-directed WorkOrder for core execution.
   */
  createWorkOrder(
    uniqueOrderCode: string,
    requesterRoleIdString: string,
    targetAssetIdString: string,
    priority: 'ROUTINE' | 'ELEVATED' | 'CRITICAL_URGENT',
    scheduledStartDate: Date,
    scheduledEndDate: Date,
    context: OperationsContext
  ): Promise<WorkOrder>;

  /**
   * Dynamically assigns human, mechanical, or virtual resources to tasks or projects.
   */
  assignResources(
    targetEntityIdString: string, // Project or WorkOrder ID
    assignedResourceIdString: string,
    allocationRatioDecimal: number,
    context: OperationsContext
  ): Promise<boolean>;

  /**
   * Commences operational execution steps, advancing the state-machine.
   */
  executeOperations(
    workOrderIdString: string,
    context: OperationsContext
  ): Promise<WorkOrder>;

  /**
   * Evaluates quality inspection compliance and measures SLAs.
   */
  monitorOperations(
    targetEntityIdString: string,
    associatedStandardIdString: string,
    context: OperationsContext
  ): Promise<QualityInspection>;

  /**
   * Solicits AI agents to suggest continuous improvement recommendations and bottleneck spots.
   */
  improveOperations(
    associatedPlanIdString: string,
    context: OperationsContext
  ): Promise<OperationalInsight[]>;
}
