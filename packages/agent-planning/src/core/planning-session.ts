import { PlanningId } from '../identity/planning-id.js';
import { PlanningLifecycleState } from './planning-lifecycle.js';

export interface PlanningSession {
  readonly sessionId: string;
  readonly planningId: PlanningId;
  readonly tenantId: string;
  readonly state: PlanningLifecycleState;
  readonly lastModifiedAt: Date;
  readonly establishedAt: Date;
}
