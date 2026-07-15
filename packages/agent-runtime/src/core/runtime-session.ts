import { SessionId } from '../identity/session-id.js';
import { AgentId } from '@sbb/agent-framework';
import { RuntimeContext } from './runtime-context.js';

export type SessionState = 'INITIALIZING' | 'ACTIVE' | 'PAUSED' | 'COMPLETED' | 'FAILED' | 'TERMINATED';

export interface RuntimeSession {
  readonly sessionId: SessionId;
  readonly agentId: AgentId;
  readonly tenantId: string;
  readonly state: SessionState;
  readonly context: RuntimeContext;
  readonly startedAt: Date;
  readonly pausedAt?: Date;
  readonly completedAt?: Date;
  readonly errorDetails?: string;
}
