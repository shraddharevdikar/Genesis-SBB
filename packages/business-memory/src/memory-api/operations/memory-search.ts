import { MemorySession } from '../core/memory-session.js';

export interface MemorySearchOptions {
  readonly maxHits?: number;
  readonly includeSemanticRelations?: boolean;
}

export interface MemorySearch {
  /**
   * Searches the corporate memory indexes using exact filters or metadata matching.
   */
  search(
    session: MemorySession,
    keywords: string[],
    options?: MemorySearchOptions
  ): Promise<Record<string, any>[]>;
}
