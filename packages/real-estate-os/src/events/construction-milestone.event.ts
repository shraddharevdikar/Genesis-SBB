import { ConstructionMilestone } from '../construction/milestone.js';
import { IndustryContext } from '../core/industry-context.js';

export interface ConstructionMilestoneEvent {
  readonly eventId: string;
  readonly eventName: 'CONSTRUCTION_MILESTONE_REACHED';
  readonly payload: {
    readonly milestone: ConstructionMilestone;
  };
  readonly context: IndustryContext;
}
