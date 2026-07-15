import { SessionId } from '../identity/session-id.js';

export interface RuntimeStartedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly sessionId: SessionId;
  readonly agentId: string;
  readonly triggeredByRoleId: string;
  readonly timestamp: Date;
}
