import { PlanningId } from '../identity/planning-id.js';

export interface PlanningStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly planningId: PlanningId;
  readonly businessGoalId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
