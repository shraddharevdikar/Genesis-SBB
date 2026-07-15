import { PlanningId } from '../identity/planning-id.js';
import { PlanId } from '../identity/plan-id.js';

export interface PlanCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly planningId: PlanningId;
  readonly planId: PlanId;
  readonly phasesCount: number;
  readonly estimatedTotalDurationMinutes: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
