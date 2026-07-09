import { StrategicInitiative } from '../strategy/strategic-initiative.js';

export interface StrategicInitiativeAddedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly strategicInitiative: StrategicInitiative;
  readonly addedByRoleId: string;
  readonly timestamp: Date;
}
