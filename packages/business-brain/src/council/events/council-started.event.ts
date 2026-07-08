import { CouncilContext } from '../core/council-context.js';

export interface CouncilStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly sessionId: string;
  readonly context: CouncilContext;
  readonly timestamp: Date;
}
