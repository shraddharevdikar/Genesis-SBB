import { PlanningId } from '../identity/planning-id.js';
import { PlanId } from '../identity/plan-id.js';

export interface PlanningCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly planningId: PlanningId;
  readonly finalPlanId: PlanId;
  readonly planGenerationDurationMs: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
