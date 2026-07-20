import { StrategicInitiative } from '../strategy/strategic-initiative.js';
import { ExecutiveContext } from '../core/executive-context.js';

export interface StrategicInitiativeApprovedEvent {
  readonly eventId: string;
  readonly eventName: 'STRATEGIC_INITIATIVE_APPROVED';
  readonly payload: {
    readonly initiative: StrategicInitiative;
  };
  readonly context: ExecutiveContext;
}
