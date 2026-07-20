import { ExecutiveDecision } from '../governance/executive-decision.js';
import { ExecutiveContext } from '../core/executive-context.js';

export interface BoardDecisionRecordedEvent {
  readonly eventId: string;
  readonly eventName: 'BOARD_DECISION_RECORDED';
  readonly payload: {
    readonly decision: ExecutiveDecision;
  };
  readonly context: ExecutiveContext;
}
