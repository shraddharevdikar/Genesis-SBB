import { MemorySession } from '../core/memory-session.js';
import { GraphResult } from '../contracts/memory-result.js';

export interface MemoryGraphOptions {
  readonly traverseDepth?: number;
  readonly includeStrengthScore?: boolean;
}

export interface MemoryGraphOperation {
  /**
   * Reads node-edge relationship connections and navigates capability mappings in the Knowledge Graph.
   */
  retrieveGraph(
    session: MemorySession,
    originNodeId: string,
    options?: MemoryGraphOptions
  ): Promise<GraphResult>;
}
