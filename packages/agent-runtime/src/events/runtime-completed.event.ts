import { SessionId } from '../identity/session-id.js';

export interface RuntimeCompletedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly sessionId: SessionId;
  readonly agentId: string;
  readonly executionTimeMs: number;
  readonly goalsSucceededCount: number;
  readonly timestamp: Date;
}
