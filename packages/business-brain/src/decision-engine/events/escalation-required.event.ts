import { DecisionEngineContext } from '../core/decision-engine-context.js';

export interface EscalationRequiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly sessionId: string;
  readonly context: DecisionEngineContext;
  readonly reason: string;
  readonly minAuthorityLevelRequired: string;
  readonly timestamp: Date;
}
