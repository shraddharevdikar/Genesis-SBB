import { MemorySession } from '../core/memory-session.js';
import { ContextResult } from '../contracts/memory-result.js';

export interface MemoryContextOptions {
  readonly minRelevanceScore?: number;
  readonly restrictToScopes?: string[];
}

export interface MemoryContextOperation {
  /**
   * Retrieves unified assembled context for executive reasoning matching custom requirements.
   */
  retrieveContext(
    session: MemorySession,
    profileId: string,
    options?: MemoryContextOptions
  ): Promise<ContextResult>;
}
