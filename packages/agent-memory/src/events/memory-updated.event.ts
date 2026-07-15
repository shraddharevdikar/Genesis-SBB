import { MemoryReferenceId } from '../identity/memory-reference-id.js';
import { AgentId } from '@sbb/agent-framework';

export interface MemoryUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: AgentId;
  readonly targetReferenceId: MemoryReferenceId;
  readonly updatedFieldNamesList: string[];
  readonly traceId: string;
  readonly timestamp: Date;
}
