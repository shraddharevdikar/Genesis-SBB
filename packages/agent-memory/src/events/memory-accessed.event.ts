import { MemoryReferenceId } from '../identity/memory-reference-id.js';
import { AgentId } from '@sbb/agent-framework';

export interface MemoryAccessedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: AgentId;
  readonly accessedReferencesList: MemoryReferenceId[];
  readonly justificationCode: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
