import { ObjectiveId } from '../identity/objective-id.js';
import { KeyResultId } from '../identity/key-result-id.js';
import { KpiId } from '../identity/kpi-id.js';
import { PerformanceContext } from './performance-context.js';
import { Objective, ObjectiveClassificationCode } from '../objectives/objective.js';
import { KeyResult } from '../key-results/key-result.js';
import { BusinessKpi } from '../kpis/business-kpi.js';

export interface PerformanceFramework {
  /**
   * Spawns a brand-new multi-tenant, strategic or operational objective blueprint.
   */
  createObjective(
    uniqueObjectiveCode: string,
    classification: ObjectiveClassificationCode,
    displayName: string,
    descriptionNotes: string,
    targetCompletionDate: Date,
    context: PerformanceContext
  ): Promise<Objective>;

  /**
   * Binds an incremental, measurable target key result to an existing objective.
   */
  defineKeyResult(
    objectiveId: ObjectiveId,
    keyResult: KeyResult,
    context: PerformanceContext
  ): Promise<KeyResultId>;

  /**
   * Registers a brand-new corporate, departmental, or process-level performance indicator.
   */
  registerKPI(
    kpi: BusinessKpi,
    context: PerformanceContext
  ): Promise<KpiId>;

  /**
   * Links a business objective to an enterprise core capability for strategic alignment tracking.
   */
  linkObjectiveToCapability(
    objectiveId: ObjectiveId,
    enterpriseCoreCapabilityCode: string,
    context: PerformanceContext
  ): Promise<void>;

  /**
   * Audits achievement scores, progress metrics, and compliance policies for active objectives.
   */
  evaluatePerformance(
    objectiveId: ObjectiveId,
    context: PerformanceContext
  ): Promise<Objective>;

  /**
   * Sunsets an active objective, transitioning its measurement state to RETIRED.
   */
  retireObjective(
    objectiveId: ObjectiveId,
    context: PerformanceContext
  ): Promise<void>;
}
