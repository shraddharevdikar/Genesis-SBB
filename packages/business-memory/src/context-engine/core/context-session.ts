import { SessionId } from '../identity/session-id.js';
import { ContextId } from '../identity/context-id.js';

export interface ContextSession {
  readonly sessionId: SessionId;
  readonly tenantId: string;
  readonly currentContextId?: ContextId;
  readonly activeParticipantRoleIds: string[];
  readonly lastActivityAt: Date;
  readonly status: 'ACTIVE' | 'IDLE' | 'TERMINATED';
}
