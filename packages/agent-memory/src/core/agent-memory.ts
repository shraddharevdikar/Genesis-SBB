import { AgentId } from '@sbb/agent-framework';
import { MemoryContext } from './memory-context.js';
import { MemoryAccess } from './memory-access.js';
import { MemoryReferenceId } from '../identity/memory-reference-id.js';
import { MemoryQuery } from '../retrieval/memory-query.js';
import { MemoryContribution } from '../contribution/memory-contribution.js';
import { MemoryAttribution } from '../contribution/memory-attribution.js';

export interface AgentMemory {
  /**
   * Accesses explicit granular memories of the SBB enterprise network using audited tokens.
   */
  accessMemory(
    tenantId: string,
    agentId: AgentId,
    references: MemoryReferenceId[],
    context: MemoryContext
  ): Promise<MemoryAccess>;

  /**
   * Searches across federated organizational memory pools according to a structural retrieval query.
   */
  searchMemory(
    tenantId: string,
    query: MemoryQuery,
    context: MemoryContext
  ): Promise<MemoryReferenceId[]>;

  /**
   * Synthesizes and loads a specific contextual block of memory ready for inclusion in an agent execution window.
   */
  retrieveContext(
    tenantId: string,
    agentId: AgentId,
    query: MemoryQuery,
    tokenLimit: number
  ): Promise<{
    readonly formattedContext: string;
    readonly totalTokensEstimated: number;
    readonly referencesUsed: MemoryReferenceId[];
  }>;

  /**
   * Contributes newly synthesized knowledge, events, or facts back into SBB organization memory.
   */
  contributeMemory(
    tenantId: string,
    agentId: AgentId,
    contribution: MemoryContribution,
    context: MemoryContext
  ): Promise<MemoryReferenceId>;

  /**
   * Attributes a memory item back to its original creator (human role or source digital employee trace).
   */
  attributeContribution(
    tenantId: string,
    referenceId: MemoryReferenceId,
    attribution: MemoryAttribution,
    context: MemoryContext
  ): Promise<MemoryAttribution>;

  /**
   * Strictly validates if an agent is authorized to query/access memory scopes under active security profiles.
   */
  validateAccess(
    tenantId: string,
    agentId: AgentId,
    targetScope: string
  ): Promise<{
    readonly isAuthorized: boolean;
    readonly activePermissionTokenId?: string;
    readonly restrictionDetails?: string;
  }>;
}
