import { PlanningId } from '../identity/planning-id.js';
import { PlanId } from '../identity/plan-id.js';

export interface PlanApprovedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly planningId: PlanningId;
  readonly planId: PlanId;
  readonly approverParticipantId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
