import { DecisionEngineContext } from '../core/decision-engine-context.js';

export interface DecisionStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly sessionId: string;
  readonly context: DecisionEngineContext;
  readonly timestamp: Date;
}
