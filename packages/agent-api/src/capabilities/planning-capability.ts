import { ApiContext } from '../core/api-context.js';

export interface PlanningCapability {
  readonly capabilityId: string;
  generateStrategicPlan(
    tenantId: string,
    goalDescriptionString: string,
    context: ApiContext
  ): Promise<{ readonly planId: string; readonly estimatedStepsCount: number }>;
  
  optimizeExistingPlanSteps(
    planId: string,
    context: ApiContext
  ): Promise<{ readonly planId: string; readonly wasChanged: boolean }>;
}
