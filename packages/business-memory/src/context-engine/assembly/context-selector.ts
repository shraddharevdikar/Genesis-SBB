import { ContextItem } from '../core/context.js';
import { RelevanceModel } from '../relevance/relevance-model.js';

export interface ContextSelector {
  /**
   * Sorts, rank, and picks the most relevant contextual records from an array based on weights.
   */
  selectHighlyRelevant(
    items: ContextItem[],
    cutoffScore: number
  ): Promise<ContextItem[]>;
  
  /**
   * Resolves contradictory items within a candidate list of contexts.
   */
  resolveConflict(
    itemA: ContextItem,
    itemB: ContextItem
  ): Promise<{ resolved: ContextItem; relevance: RelevanceModel }>;
}
