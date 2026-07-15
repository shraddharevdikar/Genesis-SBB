import { MemoryAccessId } from '../identity/memory-access-id.js';
import { MemoryReferenceId } from '../identity/memory-reference-id.js';
import { AgentId } from '@sbb/agent-framework';

export interface MemoryAccess {
  readonly accessId: MemoryAccessId;
  readonly agentId: AgentId;
  readonly tenantId: string;
  readonly accessedReferences: MemoryReferenceId[];
  readonly justificationCode: string; // The SBB operational justification (e.g. "SBB_MAINTENANCE_LOG_REVIEW")
  readonly grantedScope: string;
  readonly accessedAt: Date;
}
