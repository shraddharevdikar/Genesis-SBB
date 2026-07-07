import { RoutingDecision } from '../router/routing-decision.js';

export interface RoutingCompletedEvent {
  readonly eventType: 'routing.completed';
  readonly timestamp: Date;
  readonly requestId: string;
  readonly decision: RoutingDecision;
  readonly evaluationDurationMs: number;
}
