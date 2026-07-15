import { SessionId } from '../identity/session-id.js';

export interface RuntimeFailedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly sessionId: SessionId;
  readonly agentId: string;
  readonly errorCode: string;
  readonly errorMessage: string;
  readonly executionTimeMs: number;
  readonly timestamp: Date;
}
