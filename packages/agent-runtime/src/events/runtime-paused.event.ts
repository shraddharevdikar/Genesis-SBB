import { SessionId } from '../identity/session-id.js';

export interface RuntimePausedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly sessionId: SessionId;
  readonly agentId: string;
  readonly pauseReason: string;
  readonly pausedByRoleId: string;
  readonly timestamp: Date;
}
