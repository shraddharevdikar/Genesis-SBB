import { StrategicPlan } from '../strategy/strategic-plan.js';
import { ExecutiveContext } from '../core/executive-context.js';

export interface StrategicPlanCreatedEvent {
  readonly eventId: string;
  readonly eventName: 'STRATEGIC_PLAN_CREATED';
  readonly payload: {
    readonly strategicPlan: StrategicPlan;
  };
  readonly context: ExecutiveContext;
}
