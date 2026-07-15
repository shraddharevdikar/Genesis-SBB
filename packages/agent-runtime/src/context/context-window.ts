import { ContextFilter } from './context-filter.js';

export interface ContextWindow {
  readonly windowId: string;
  readonly tokenBudgetLimit: number;
  readonly currentTokenUsageCount: number;
  readonly shortTermRecallItemsCount: number;
  readonly activeFilter: ContextFilter;
  readonly contentPayload: string; // Compiled context payload injectible into cognitive evaluations
}
