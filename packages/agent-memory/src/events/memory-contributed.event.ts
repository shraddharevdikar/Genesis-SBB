import { MemoryReferenceId } from '../identity/memory-reference-id.js';
import { AgentId } from '@sbb/agent-framework';

export interface MemoryContributedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: AgentId;
  readonly referenceId: MemoryReferenceId;
  readonly category: string;
  readonly statedConfidenceScore: number;
  readonly traceId: string;
  readonly timestamp: Date;
}
