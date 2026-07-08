import { StrategicGoal } from '../planning/strategic-goal.js';

export interface StrategyCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly strategicGoal: StrategicGoal;
  readonly timestamp: Date;
  readonly version: number;
}
