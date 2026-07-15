import { MemoryAccessId } from '../identity/memory-access-id.js';
import { AgentId } from '@sbb/agent-framework';

export type MemorySessionState = 'ESTABLISHED' | 'ACTIVE' | 'COMMITTED' | 'EXPIRED' | 'REVOKED';

export interface MemorySession {
  readonly sessionId: string;
  readonly agentId: AgentId;
  readonly tenantId: string;
  readonly state: MemorySessionState;
  readonly activeLeaseDurationMs: number;
  readonly memoryAccessIds: MemoryAccessId[];
  readonly establishedAt: Date;
  readonly expiresAt: Date;
}
