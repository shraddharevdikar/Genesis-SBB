import { PropertyPossession } from '../handover/possession.js';
import { IndustryContext } from '../core/industry-context.js';

export interface PossessionCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'POSSESSION_COMPLETED';
  readonly payload: {
    readonly possession: PropertyPossession;
  };
  readonly context: IndustryContext;
}
