import { ContextPriorityLevel } from './context-priority.js';

export interface ContextScore {
  readonly absoluteScore: number; // 0 to 100
  readonly priorityAssigned: ContextPriorityLevel;
  readonly confidenceWeight: number; // 0.0 to 1.0
  readonly isPromotedToCritical: boolean;
}
