import { ContextWindow } from './context-window.js';
import { RuntimeContext } from '../core/runtime-context.js';

export interface ContextBuilder {
  /**
   * Constructs an optimized ContextWindow populated with active session variables, short term memory buffers, and filtered profiles.
   */
  buildSessionContext(
    tenantId: string,
    context: RuntimeContext,
    options: {
      readonly includeShortTermBuffer: boolean;
      readonly includeVectorMemories: boolean;
      readonly includeKnowledgePacks: boolean;
    }
  ): Promise<ContextWindow>;
}
