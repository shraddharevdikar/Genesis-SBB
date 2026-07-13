import { MemoryContext } from '../../core/memory-context.js';

export interface LearningContext extends MemoryContext {
  readonly targetCycleId?: string;
  readonly isRetrospective?: boolean;
  readonly bypassMaturityGate?: boolean;
}
