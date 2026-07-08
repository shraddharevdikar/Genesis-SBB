import { DecisionResponse } from '../decision/decision-response.js';

export interface ExecutiveDecisionMadeEvent {
  readonly eventId: string;
  readonly decision: DecisionResponse;
  readonly tenantId: string;
  readonly timestamp: Date;
}
